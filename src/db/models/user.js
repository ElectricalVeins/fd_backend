'use strict';
const { NAME_PATTERN,SALT_ROUND } = require('../../constants');
const bcrypt = require('bcrypt');



module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: NAME_PATTERN
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: NAME_PATTERN
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'passwordHash',
      set (value) {
          this.setDataValue('password',bcrypt.hashSync(value, SALT_ROUND ))
      },
    },
    profilePicture: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Task,{
      foreignKey:'userId',

    })
  };
  return User;
};