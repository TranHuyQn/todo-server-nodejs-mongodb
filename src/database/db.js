const Mongoose = require("mongoose");
Mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PWD}@${process.env.MONGODB_SERVER}:${process.env.MONGODB_PORT}/${process.env.MONGODB_NAME}`);
