module.exports = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      req.authorizationData = {
        id: req.headers.authorization
      };
      next();
    }
    res.status(401).send('Authorization required')
  } catch (e) {
    next(e);
  }
};