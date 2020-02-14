const { BaseError, ValidationError, UniqueConstraintError } = require(
  'sequelize');

module.exports = (err, req, res, next) => {
  /*
      //не работает потому что оба кэйса true
      // как вариант: определять ошибку по свойству её объекта err.name
      switch (err) {
        case err instanceof UniqueConstraintError :
      res.status(400).send(
        `Error: ${err.errors[0].message}. This ${err.errors[0].path} was already registered.`);
          break;
        case err instanceof BaseError:
          res.status(400).send(err);
          break;
      }
      */

  if (err instanceof UniqueConstraintError) {
    res.status(400).send(
      `Error: ${err.errors[0].message}. This ${err.errors[0].path} was already registered.`);
    return;
  }
  if (err instanceof ValidationError) {
    res.status(400).send(
      `Error in field '${err.errors[0].path}'. ${err.errors[0].message}  `);
  }
  if (err instanceof BaseError) {
    res.status(400).send(err);
  }
  next(err);
};