async function addUserIdToBody (req, res, next) {

  try {
    if (req.body.userId) {
      req.body.userId = req.headers.authorization;
    } else {
      next();
    }
  } catch (e) {

  }
}

module.exports = {
  addUserIdToBody
};