'use strict'
import { Model, DataTypes } from 'sequelize'
const connection = require('./index')

const userInit = (sequelize: any, DataTypes: { STRING: any; NUMBER: any }) => {
  class User extends Model {}
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
  return User
}

module.exports = userInit(connection, DataTypes)
