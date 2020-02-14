const express = require( 'express' );
const { TaskController } = require( '../controllers' );


const taskRouter = express.Router();

taskRouter.route( '/user(/:id)?' )
           .post( TaskController.createTask )

           .get( TaskController.getTaskById )
           .patch( TaskController.updateTaskById )
           .delete( TaskController.deleteTaskById );

module.exports = taskRouter;