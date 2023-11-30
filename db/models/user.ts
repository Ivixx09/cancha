'use strict'
import { Model, DataTypes } from 'sequelize'
const connection = require('../index')
const Service = require('./service')

const userInit = (sequelize: any, DataTypes: { STRING: any; NUMBER: any }) => {
  class User extends Model {
    static associate(models: any) {
      User.hasMany(models.Service, {
        foreignKey: 'userId',
        as: 'services',
      })
      User.belongsToMany(Service, { through: 'Diary' })
    }
  }
  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      freezeTableName: true,
    },
  )
  connection.sync({ alter: true })
  return User
}

module.exports = userInit(connection, DataTypes)
