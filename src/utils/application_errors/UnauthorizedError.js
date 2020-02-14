const ApplicationError =require('./ApplicationError.js');

class UnauthorizedError extends ApplicationError {
  constructor () {
    super( 'The request requires user authentication.', 401 );
  }
}

module.exports= UnauthorizedError;