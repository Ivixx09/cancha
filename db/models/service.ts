'use strict'
import { type } from 'os'
import { Model, DataTypes } from 'sequelize'
const connection = require('./index')
const User = require('./user')

const serviceInit = (sequelize: any, DataTypes: any) => {
  class Service extends Model {
    static associate(models: any) {
      Service.belongsTo(models.User, {
        foreignKey: 'userId',
      })
    }
  }
  Service.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      sena: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duration: {
        type: DataTypes.FLOAT,
      },
      game_type: {
        type: DataTypes.STRING,
      },
      grass: {
        type: DataTypes.STRING,
      },
      ball: {
        type: DataTypes.BOOLEAN,
      },
      length: {
        type: DataTypes.INTEGER,
      },
      width: {
        type: DataTypes.INTEGER,
      },
      street: {
        type: DataTypes.STRING,
      },
      number: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Service',
      freezeTableName: true,
    },
  )
  return Service
}

module.exports = serviceInit(connection, DataTypes)
