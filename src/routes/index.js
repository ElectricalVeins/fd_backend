const express = require('express');
const userRouter=require('./user.route.js');
const taskRouter=require('./task.route.js');


const router = express.Router();

router.route('/user',userRouter);
router.route('/task',taskRouter);


module.exports = router;