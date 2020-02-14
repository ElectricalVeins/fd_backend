const express = require('express');
const { checkAuthorization } = require('../middlewares/user');
const userRouter = require('./user.route.js');
const taskRouter = require('./task.route.js');

const router = express.Router();

router.use(checkAuthorization);
router.use(userRouter);
router.use(taskRouter);

module.exports = router;