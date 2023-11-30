import connection from '.'
import User from './user'
import Service from './service'

User.hasMany(Service, { foreignKey: 'userId' })
Service.belongsTo(User, { foreignKey: 'userId' })

connection.sync({ alter: true })

export { User, Service }
