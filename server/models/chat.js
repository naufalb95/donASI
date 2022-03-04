'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      Chat.belongsTo(models.User, { foreignKey: 'first_user_id' });
      Chat.belongsTo(models.User, { foreignKey: 'second_user_id' });
    }
  }
  Chat.init(
    {
      first_user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      second_user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      chat_log_id: DataTypes.UUIDV4
    },
    {
      sequelize,
      modelName: 'Chat'
    }
  );
  return Chat;
};
