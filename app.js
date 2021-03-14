require('dotenv').config();
require("./src/database/db");
const Express = require("express");
const BodyParser = require("body-parser");
const Cors = require("cors");
const routes = require("./src/routes/routes");

const port = process.env.PORT || 4000;


var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(Cors());
routes(app);
app.listen(port, () => {
    console.log(`Listening at :${port}...`);
});