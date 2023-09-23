'use strict';
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
    }
  }, {
    sequelize,
    modelName: 'Service',
    freezeTableName: true
  });
  return Service;
};

module.exports = serviceInit(connection, DataTypes)