'use strict'
import { Model, DataTypes } from 'sequelize'
const connection = require('../index')

const diaryInit = (sequelize: any, DataTypes: any) => {
  class Diary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models: any) {
      // define association here
    }
  }
  Diary.init(
    {
      day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hour: {
        type: DataTypes.STRING,
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
      modelName: 'Diary',
      freezeTableName: true,
    },
  )
  return Diary
}

module.exports = diaryInit(connection, DataTypes)
