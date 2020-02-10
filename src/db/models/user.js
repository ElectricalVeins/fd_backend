'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true,
        },
        passwordHash: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        profilePicture: {
            type: DataTypes.STRING,
        }
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};