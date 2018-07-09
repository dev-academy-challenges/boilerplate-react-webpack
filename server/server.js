const path = require('path')
const express = require('express')
const passport = require('passport')

const registerRoute = require('./routes/auth')
const volunteersRoute = require('./routes/volunteers') // Gives the server the routes
const server = express()

server.use(passport.initialize())
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/auth', registerRoute)
server.use('/api/v1/volunteers', volunteersRoute) // Matches URL to route file

module.exports = server
