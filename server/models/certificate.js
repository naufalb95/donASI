'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    static associate(models) {
      Certificate.belongsTo(models.User, { foreignKey: 'user_id' });
      Certificate.belongsTo(models.BabyData, { foreignKey: 'baby_id' });
    }
  }
  Certificate.init(
    {
      baby_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      certificate_url: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Certificate'
    }
  );
  return Certificate;
};
