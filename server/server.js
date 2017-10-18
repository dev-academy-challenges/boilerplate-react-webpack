const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const cars = require('./public/routes/routes.js')
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, './public')))


server.use('/api/v1/cars', cars)

module.exports = server

