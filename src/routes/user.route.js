const express = require('express');
const { UserController } = require('../controllers');
const { addUserIdToBody, comparePassword } = require('../middlewares');

const userRouter = express.Router();

userRouter.post('', UserController.createUser);
userRouter.patch('/:userId', UserController.updateUserById);
userRouter.get('/:userId', UserController.readUserById);
userRouter.delete('/:userId', UserController.deleteUserById);

module.exports = userRouter;