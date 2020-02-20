const express = require('express');
const { checkAuthorization } = require('../middlewares/user');
const userRouter = require('./user.route.js');
const taskRouter = require('./task.route.js');
const adminRouter= require('./admin.js');

const router = express.Router();

//ADMIN ROUTER
router.use('/admin',adminRouter);

/*router.route( '/authorization' )
 .post( '/login', findUserByEmail, comparePassword, )
 .post( '/signup', );*/

//OTHER
//router.use(checkAuthorization);
router.use(userRouter);
router.use(taskRouter);

module.exports = router;