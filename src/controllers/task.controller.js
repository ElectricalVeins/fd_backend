const { Task } = require('../db/models');

class TaskController {
  constructor () {}

  async createTask (req, res, next) {
    try {
      req.body.userId=req.headers.authorization;

      const data = await Task.create(req.body,{
        returning:true
      });

      res.send(data);

    }catch (e) {

    }
  }

  async updateTaskById (req, res, next) {
    try {

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
    }catch (e) {

    }

  }

  async getTaskById (req, res, next) {
    try {
      const data = await Task.findByPk(req.params.taskId);

      if (data) {
        return res.send(data);
      } else{
        return res.status(500);
      }
    }catch (e) {

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