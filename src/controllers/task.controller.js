const { Task } = require('../db/models');

class TaskController {
  constructor () {}

  async createTask (req, res, next) {
    req.body.userId=req.headers.authorization;

    const data = await Task.create({...req.body});

    res.send(data);
  }

  async updateTaskById (req, res, next) {

    const [updatedDataCount, updatedData] = await Task.update(req.body, {
      where: {
        id: req.params.taskId
      },
      returning: true,
    });

    if (updatedDataCount) {
      const deleteResult = updatedData[0].get();
      return res.send(deleteResult);
    }

  }

  async getTaskById (req, res, next) {

    const data = await Task.findByPk(req.params.taskId);

    if (data) {
      return res.send(data);
    } else{
      return res.status(500);
    }

  }

  async deleteTaskById (req, res, next) {
    const result = await Task.destroy({
                                        where: {
                                          id: req.params.taskId
                                        }
                                      });
    if (result) {
      return res.send(`${result}`);
    }
  }
}

module.exports = new TaskController();