const sql = require('mysql')
const config = require('../config/config')

// db create connection
const db = sql.createConnection({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password
})

module.exports = db
