const express = require('express');
const { TaskController } = require('../controllers');
const { addTaskIdToBody, comparePassword } = require('../middlewares');

const taskRouter = express.Router();

taskRouter.post('', TaskController.createTask);
taskRouter.patch('/:taskId', TaskController.updateTaskById);
taskRouter.get('/:taskId', TaskController.readTaskById);
taskRouter.delete('/:taskId', TaskController.deleteTaskById);

module.exports = taskRouter;