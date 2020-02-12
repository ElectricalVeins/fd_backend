'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty:true,
        is:/^[^ ]*$/,
      }
    },
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    files: DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Task.associate = function (models) {
  Task.belongsTo(models.User,{
    targetKey:'id',
    foreignKey:'userId',

  })
  };
  return Task;
};