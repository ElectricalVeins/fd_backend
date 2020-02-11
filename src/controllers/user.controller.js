const { User } = require('../db/models');

const createUser =async (req, res, next) => {

  //Encryption block must be here
  req.body.passwordHash = req.body.password;
  req.body.password = undefined;

  await User.create(req.body);

  if (req.body) {
    req.body.passwordHash = undefined;
    return res.send(req.body);
  }
};

const updateUserById=async (req, res, next) => {
  const [updatedDataCount, updatedData] = await User.update(req.body, {
    where: {
      id: req.params.userId
    },
    returning: true,
  });

  if (updatedDataCount) {
    const deleteResult = updatedData[0].get();

    deleteResult.passwordHash = undefined;

    return res.send(deleteResult);
  }
};

const getUserById =async (req, res, next) => {
  const data = await User.findByPk(req.params.userId, {
    attributes: {
      exclude: ['passwordHash', 'updatedAt'],
    },
  });
  if (data) {
    return res.send(data);
  }
};

const deleteUserById= async (req, res, next) => {
  const result = await User.destroy({
                                      where: {
                                        id: req.params.userId
                                      }
                                    });
  if (result) {
    console.log(result);
    return res.send(`${result}`);
  }
};

module.exports={
  createUser,
  getUserById,
  updateUserById,
  deleteUserById
};