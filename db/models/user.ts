'use strict';
import { Model, DataTypes } from 'sequelize';
const connection = require('./index')

const userInit = (sequelize: any, DataTypes: { STRING: any; NUMBER: any; }) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models:object) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true
  });
  return User;
};

module.exports = userInit(connection, DataTypes)