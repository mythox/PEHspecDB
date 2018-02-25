const express = require('express')
const morgan = require('morgan')
const bodyParse = require('body-parser')
const cors = require('cors')
const db = require('./models/db') 
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParse.json())
app.use(cors())

// disable X-Powered-By header to avoid detecting apps running Express and then launch specifically-targeted attacks 
app.disable('x-powered-by')

// set routes on another js file
require('./routes')(app)

// server run if DB connected successfully
db.connect((err) => {
   if (err) throw err
   app.listen(config.port, () => {
     console.log(`listening on port ${config.port}...`)
   })
})
