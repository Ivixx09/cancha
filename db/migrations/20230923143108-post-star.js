'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stars: {
        allowNull: false,
        type: sequelize.INTEGER,
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
    await queryInterface.dropTable('Comment')
  },
}
