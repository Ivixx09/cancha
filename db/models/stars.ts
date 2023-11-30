'use strict'
import { Model, DataTypes } from 'sequelize'
const connection = require('../index')

const starsInit = (sequelize: any, DataTypes: any) => {
  class Stars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models: any) {
      // define association here
    }
  }
  Stars.init(
    {
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      service_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Stars',
      freezeTableName: true,
    },
  )
  return Stars
}

module.exports = starsInit(connection, DataTypes)
