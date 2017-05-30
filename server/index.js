var server = require('./server')

var env = process.env.NODE_ENV || 'development'
var knex = require('knex')
var config = require('../knexfile')[env]

server.set('knex', knex(config))

var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})

