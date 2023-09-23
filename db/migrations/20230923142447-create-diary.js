'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Diary', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      day: {
        allowNull: false,
        type: sequelize.STRING,
      },
      hour: {
        allowNull: false,
        type: sequelize.FLOAT,
      },
      service_id: {
        allowNull: false,
        type: sequelize.INTEGER,
      },
      user_email: {
        allowNull: false,
        type: sequelize.STRING,
      },
    })
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Diary')
  },
}
