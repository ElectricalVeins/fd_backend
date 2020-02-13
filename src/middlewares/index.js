async function addUserIdToBody (req, res, next) {

  try {
    if (req.body.userId) {
      return
    } else {
      next();
    }
  } catch (e) {
    next(e);
  }
}

module.exports = {
  addUserIdToBody
};