const TodoModel = require("../model/Todo");

exports.index = async (request, response) => {
    try {
        var result = await TodoModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

exports.store = async (request, response) => {
    try {
        var todo = new TodoModel(request.body);
        var result = await todo.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

exports.show = async (request, response) => {
    try {
        var todo = await TodoModel.findById(request.params.id).exec();
        response.send(todo);
    } catch (error) {
        response.status(500).send(error);
    }
}

exports.update = async (request, response) => {
    try {
        var todo = await TodoModel.findById(request.params.id).exec();
        todo.set(request.body);
        var result = await todo.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}

exports.destroy = async (request, response) => {
    try {
        var result = await TodoModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
}