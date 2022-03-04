'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    static associate(models) {
      UserAddress.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  }
  UserAddress.init(
    {
      address: DataTypes.TEXT,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: 'UserAddress'
    }
  );
  return UserAddress;
};
