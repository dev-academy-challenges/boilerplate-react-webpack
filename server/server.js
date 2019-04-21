// const path = require('path')
// const express = require('express')

// const server = express()

// server.use(express.json())
// server.use(express.static(path.join(__dirname, './public')))

// // module.exports = server

const path = require('path')
const express = require('express')
const cors = require('cors')
const targets = require('../server/routes/targets')
const server = express()

server.use(express.json())
server.use(cors({ origin: 'http://localhost:3000' }))
server.use(express.static(path.join(__dirname, './public')))
server.use('/', targets)

module.exports = server
