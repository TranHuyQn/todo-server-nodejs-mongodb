module.exports = (app) => {
    //todo route
    TodoController = require("../controller/TodoController");
    app.post("/todos", TodoController.store);
    app.get("/todos", TodoController.index);
    app.get("/todos/:id", TodoController.show);
    app.put("/todos/:id", TodoController.update);
    app.delete("/todos/:id", TodoController.destroy);
}