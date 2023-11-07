const User = require('./users.ts')

const test = async function () {
  const user = await User.findOne({ where: { id: 1 } })
  if (user) {
    const services = await user.getServices() // Suponiendo que "getServices" es el método generado automáticamente por Sequelize
    console.log(services)
  } else {
    console.log('Usuario no encontrado')
  }
}
