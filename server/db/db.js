const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getTargets,
  newTarget
}

function getTargets (db = connection) {
  return db('targets').select()
}

function newTarget (target, db = connection) {
  return db('targets')
    .insert({
      target: target.name
    })
}
