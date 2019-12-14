const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

//build express server
const app = express()
//log
app.use(morgan('combined'))
//body-parser allows you to process json data easily
app.use(bodyParser.json())
//allow any host or client to use
app.use(cors())

require('./passport')

require('./routes')(app)

// setting up sql server to keep data in
sequelize.sync() // {force: true} - drops all tables in database
  .then(() => {

    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
  