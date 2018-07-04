const path = require('path')
const express = require('express')

const volunteers = require('./routes/volunteers') // Gives the server the routes
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/volunteers', volunteers) // Matches URL to route file

module.exports = server
