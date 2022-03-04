'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BabyData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      parent_name: {
        type: Sequelize.STRING
      },
      relation_to_baby: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      birthdate: {
        type: Sequelize.DATE
      },
      religion: {
        type: Sequelize.STRING
      },
      reason: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BabyData');
  }
};
