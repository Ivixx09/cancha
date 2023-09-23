'use strict'

const sequelize = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Page', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: sequelize.STRING,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Page')
  },
}
