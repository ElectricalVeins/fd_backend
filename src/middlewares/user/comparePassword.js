const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

module.exports = async (req, res, next) => {
  try {

    const user = await User.findOne({
                                      where: {
                                        email: req.body.email
                                      }
                                    });
    if(user){
      if (await bcrypt.compare(req.body.password, user.password)) {
        req.user = user;
        const userData = user.get();
        delete userData.password;

        return req.send(user)
      }
      return res.status(403).send('Incorrect password ');
    }

    res.status(404)
  } catch (e) {

  }
};
