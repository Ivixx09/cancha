module.exports = {
  development: {
    username: 'postgres',
    password: 'Bruminita09',
    database: 'cancha',
    host: 'localhost',
    port: 5432,
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    logging: false,
    dialect: 'postgres',
  },
}
