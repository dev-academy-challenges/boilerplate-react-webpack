const path = require('path')
const request = require('superagent')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const cars = require('./routes/routes.js')
const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1/cars', cars)

module.exports = server

