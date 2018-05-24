module.exports = {
  port: process.env.PORT || 8081,
  db : {
    database: process.env.DB_NAME || 'pbemat',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'no6e3s08',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false
  }, 
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}