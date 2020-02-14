const ApplicationError =require ('./ApplicationError.js');

module.exports= class MethodNotAllowedError extends ApplicationError {
  constructor (method = '') {
    super( `The${method
                 ? ' ' + method
                 : ''} method is not allowed for the resource identified by the Request-URI.`, 405 );
  }
}