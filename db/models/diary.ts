'use strict';
import { Model, DataTypes } from 'sequelize';
const connection = require('./index');

const pageInit = (sequelize: any, DataTypes: any) => {
  class Page extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models: any) {
      // define association here
    }
  }
  Page.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,  
    modelName: 'Page',
    freezeTableName: true
  });
  return Page;
};

module.exports = pageInit(connection, DataTypes)