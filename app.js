require('dotenv').config();
require("./src/database/db");
const Express = require("express");
const BodyParser = require("body-parser");
const routes = require("./src/routes/routes");

const port = process.env.PORT || 4000;


var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
routes(app);
app.listen(port, () => {
    console.log(`Listening at :${port}...`);
});