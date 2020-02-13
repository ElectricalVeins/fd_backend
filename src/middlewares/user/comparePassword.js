const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

module.exports = async (req, res, next) => {
  try {

    const user = await User.findOne({
                                      where: {
                                        email: req.body.email
                                      }
                                    });

    if (await bcrypt.compare(req.body.password, user.password)) {
      return next();
    }
    res.status(403).send('Incorrect password ');
  } catch (e) {

  }
};
