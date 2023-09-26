'use strict';
import { type } from 'os';
import { Model, DataTypes } from 'sequelize';
const connection = require('./index')

const serviceInit = (sequelize: any, DataTypes: any) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models:object) {
      // define association here
    }
  }
  Service.init({
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:false
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    sena: {
        type:DataTypes.INTEGER,
        allowNull:true
    },
    duration:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    game_type:{
        type:DataTypes.STRING,
        allowNull: false
    },
    grass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ball:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    length:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    width:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    street:{
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Service',
    freezeTableName: true
  });
  return Service;
};

module.exports = serviceInit(connection, DataTypes)