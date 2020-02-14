const express = require('express');
const { checkAuthorization } = require( '../middlewares/user' );
const userRouter=require('./user.route.js');
const taskRouter=require('./task.route.js');


const router = express.Router();

router.use( checkAuthorization );
router.use( '/user', userRouter );
router.use( '/task', taskRouter );


module.exports = router;