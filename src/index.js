const express = require('express');
const { UserController, TaskController } = require('./controllers');
const {addUserIdToBody}= require('./middlewares');

const PORT = process.env.NODE_ENV || 3000;

const app = express();
app.use(express.json());




//============================//

app.post('/user', UserController.createUser);
app.patch('/user/:userId', UserController.updateUserById);
app.get('/user/:userId', UserController.readUserById);
app.delete('/user/:userId', UserController.deleteUserById);


app.post('/task', TaskController.createTask);
app.patch('/task/:taskId', TaskController.updateTaskById);
app.get('/task/:taskId', TaskController.readTaskById);
app.delete('/task/:taskId', TaskController.deleteTaskById);

//============================//

app.listen(PORT,
           () => console.log(`Server app started on port${PORT}`));
