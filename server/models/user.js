'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.BabyData, { foreignKey: 'user_id' });
      User.hasMany(models.UserAddress, { foreignKey: 'user_id' });
      User.hasMany(models.Chats, { foreignKey: 'first_user_id' });
      User.hasMany(models.Chats, { foreignKey: 'second_user_id' });
      User.hasMany(models.Orders, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      type: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};
