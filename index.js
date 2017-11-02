// require
const express = require('express')
const app = express()
const server_api = require('./routes/api.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// body parser
app.use(bodyParser.json())

// configure of logging
app.use(morgan('dev'))

// static route
app.use(express.static(__dirname + '/www'))

// routing to api.js
app.use('/api', server_api)

// listneing config
app.listen(process.env.PORT, () => {
  console.log("listneing!")
})

