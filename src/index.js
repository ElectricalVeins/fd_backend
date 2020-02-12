const express = require('express');
const {UserController, TaskController}=require('./controllers')

const PORT = process.env.NODE_ENV || 3000;

const app = express();
app.use(express.json());



//============================//

app.post('/user', UserController.createUser);
app.patch('/user/:userId', UserController.updateUserById);
app.get('/user/:userId', UserController.getUserById);
app.delete('/user/:userId', UserController.deleteUserById);

app.post('/task', TaskController.createTask);
app.patch('/task/:taskId', TaskController.updateTaskById);
app.get('/task/:taskId', TaskController.getTaskById);
app.delete('/task/:taskId', TaskController.deleteTaskById);




app.listen(PORT,
           () => console.log(`Server app started on port${PORT}`));
/*
app.post('/user', async (req, res, next) => {
  try {
    req.body.passwordHash = req.body.password;

    const createdUser = await User.create(req.body);

    if (createdUser) {
      const data = createdUser.get();
      delete data.password;
      delete data.passwordHash;
      return res.status(201).send(data);
    }
    next();
  } catch (e) {
    next(e);
  }
});

app.patch('/user/:userId', async (req, res, next) => {
  try {
    const [updatedRowsCount, updatedRows] = await User.update(req.body, {
      where: {
        id: req.params.userId
      },
      returning: true,
    });

    if (updatedRowsCount) {
      const data = updatedRows[0].get();
      delete data.passwordHash;
      delete data.password;
      return res.send(data);
    }
    next();
  } catch (e) {
    next(e);
  }
});

app.get('/user/:userId', async (req, res, next) => {
  try {

    const foundUser = await User.findByPk(req.params.userId, {
      attributes: {
        exclude: ['passwordHash', 'updatedAt']
      }
    });

    if (foundUser) {
      return res.send(foundUser);
    }
    next();
  } catch (e) {
    next(e);
  }
});

app.delete('/user/:userId', async (req, res, next) => {
  try {
    const deletedRowCount = await User.destroy({
                                                 where: {
                                                   id: req.params.userId
                                                 }
                                               });
    if (deletedRowCount) {
      return res.send(`${deletedRowCount}`);
    }
    next();
  } catch (e) {
    next(e);
  }
});

*/