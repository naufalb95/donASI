'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.belongsTo(models.BabyData, { foreignKey: 'baby_id' });
    }
  }
  Order.init(
    {
      user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      baby_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      status: DataTypes.STRING,
      description: DataTypes.TEXT,
      bottle_amount: DataTypes.NUMBER,
      delivery_provider: DataTypes.NUMBER,
      delivery_price: DataTypes.NUMBER
    },
    {
      sequelize,
      modelName: 'Order'
    }
  );
  return Order;
};
