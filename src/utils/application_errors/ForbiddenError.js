const ApplicationError = require('./ApplicationError.js');

class ForbiddenError extends ApplicationError {
  constructor (message = '') {
    super(
      `The server understood the request, but is refusing to fulfill it. ${message}`,
      403);
  }
}

module.exports = ForbiddenError;