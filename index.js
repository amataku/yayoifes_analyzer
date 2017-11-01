// require
const express = require('express')
const app = express()
const server_api = require('./routes/api.js')
const morgan = require('morgan')
const bodyParser = require('body-parser')

// listneing config
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(`${process.env.SERVER_HOST}:${process.env.SERVER_PORT} listneing!`)
})

// body parser
app.use(bodyParser.json())

// configure of logging
app.use(morgan('dev'))

// static route
app.use(express.static(__dirname + '/www'))

// routing to api.js
app.use('/api', server_api)

