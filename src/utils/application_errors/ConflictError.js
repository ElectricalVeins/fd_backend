const ApplicationError =require ('./ApplicationError.js');

class ConflictError extends ApplicationError {
  constructor (resourceName) {
    super( `The request could not be completed due to a conflict with the current state of the ${resourceName ||
                                                                                                 'resource'}.`, 409 );
  }
}

module.exports= ConflictError;
