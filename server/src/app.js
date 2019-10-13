const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

//build express server
const app = express()
//log
app.use(morgan('combined'))
//body-parser allows you to process json data easily
app.use(bodyParser.json())
//allow any host or client to use
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    mesaage: "hello world!"
  })
})

app.listen(process.env.PORT || 8081)