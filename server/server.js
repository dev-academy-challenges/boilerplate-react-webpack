const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))

servr.use('/api/v1/car_info', require('./routes'))

module.exports = server
