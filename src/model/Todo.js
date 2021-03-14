const Mongoose = require("mongoose");
const TodoModel = Mongoose.model("todo", {
    name: String,
    completed: Boolean
});

module.exports = TodoModel;