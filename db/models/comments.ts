'use strict'
import { Model, DataTypes } from 'sequelize'
const connection = require('../index')

const commentInit = (sequelize: any, DataTypes: any) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(_models: any) {
      // define association here
    }
  }
  Comment.init(
    {
      content: {
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
      modelName: 'Comment',
      freezeTableName: true,
    },
  )
  return Comment
}

module.exports = commentInit(connection, DataTypes)
