const knex = require('knex')

const config = require('../knexfile').development

const db = knex(config)
var moment = require('moment')

module.exports = {
  getAllVolunteers,
  getVolunteer
}

function getAllVolunteers () {
  return db('volunteers').select()
}

function getVolunteer (id) {
  return db('volunteers').where('id', id).first()
}

function editVolunteer () {
  return
}
