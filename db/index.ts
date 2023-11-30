import { Sequelize } from 'sequelize'
import config from './config/config.js'

let sequelize
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(config.production)
} else {
  sequelize = new Sequelize(config.development)
}

const connection = sequelize
connection.sync({ alter: true })
module.exports = connection
