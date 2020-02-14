const express = require( 'express' );
const { TaskController } = require( '../controllers' );
const { extractUserId } = require( './../middlewares/user' );
const taskRouter = express.Router();

taskRouter.route( '/task(/:id)?' )
           .post( TaskController.createTask )
// .all( extractUserId )
           .get( TaskController.getTaskById )
           .patch( TaskController.updateTaskById )
           .delete( TaskController.deleteTaskById );

module.exports = taskRouter;