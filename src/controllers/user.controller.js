const { User } = require('../db/models');

/*const createUser = async (req, res, next) => {

};

const updateUserById = async (req, res, next) => {

};

const getUserById = async (req, res, next) => {

};

const deleteUserById = async (req, res, next) => {

};*/

class UserController {
  constructor () {}

  async createUser (req, res, next) {
    try {
      const data = await User.create(req.body);

      if (data) {
        req.body.password = undefined;
        return res.send(req.body);
      }

    } catch (e) {

    }
  }

  async updateUserById (req, res, next) {
    try {
      const [updatedDataCount, updatedData] = await User.update(req.body, {
        where: {
          id: req.params.userId
        },
        returning: true,
      });
      if (updatedDataCount) {
        const deleteResult = updatedData[0].get();

        deleteResult.password = undefined;

        return res.send(deleteResult);
      }

    } catch (e) {

    }
  }

  async getUserById (req, res, next) {
    try {
      const data = await User.findByPk(req.params.userId, {
        attributes: {
          exclude: ['passwordHash', 'updatedAt'],
        },
      });
      if (data) {
        return res.send(data);
      }

    } catch (e) {

    }
  }

  async deleteUserById (req, res, next) {
    try {
      const result = await User.destroy({
                                          where: {
                                            id: req.params.userId
                                          }
                                        });
      if (result) {
        return res.send(`${result}`);
      }

    } catch (e) {

    }
  }
}

module.exports = new UserController();