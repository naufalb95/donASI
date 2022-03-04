'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BabyData extends Model {
    static associate(models) {
      BabyData.belongsTo(models.User, { foreignKey: 'user_id' });
      BabyData.hasMany(models.Order, { foreignKey: 'baby_id' });
      BabyData.hasMany(models.Certificate, { foreignKey: 'baby_id' });
    }
  }
  BabyData.init(
    {
      parent_name: DataTypes.STRING,
      relation_to_baby: DataTypes.STRING,
      address: DataTypes.TEXT,
      name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthdate: DataTypes.DATE,
      religion: DataTypes.STRING,
      reason: DataTypes.TEXT,
      type: DataTypes.STRING,
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
      modelName: 'BabyData'
    }
  );
  return BabyData;
};
