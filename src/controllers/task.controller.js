const { Task } = require('../db/models');
const Controller = require('../utils/controller');

class TaskController {
  constructor () {
    this._controller = new Controller(Task);
  }

  createTask = async (req, res, next) => {
    try {
      req.body.userId = req.headers.authorization;
      const newTask = await this._controller.create(req.body);
      return res.send(newTask);

    } catch (e) {
      next(e);
    }
  };

  readTaskById = async (req, res, next) => {
    try {

      const task = await this._controller.read(req.params.id);

      return res.send(task);
    } catch (e) {
      next(e);
    }
  };

  updateTaskById = async (req, res, next) => {
    try {
      const updatedTask = await this._controller.update(req.params.id);

      return res.send(updatedTask);
    } catch (e) {
      next(e);
    }
  };

  deleteTaskById = async (req, res, next) => {
    try {
      const deletedTask = await this._controller.delete(req.params.id);

      return res.send(deletedTask);
    } catch (e) {

    }
  };

}

module.exports = new TaskController();