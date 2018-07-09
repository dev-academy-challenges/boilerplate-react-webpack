const knex = require('knex')

const config = require('../../knexfile').development

const db = knex(config)
// var moment = require('moment')

module.exports = {
  getAllVolunteers,
  getVolunteer,
  editVolunteer,
  // addVolunteer,
  deleteVolunteer
}

function getAllVolunteers () {
  return db('volunteers').select()
}

function getVolunteer (id) {
  return db('volunteers')
    .where('id', id).first()
}

function editVolunteer (updatedVolunteer) {
  return db('volunteers')
    .where('id', updatedVolunteer.id)
    .update(updatedVolunteer)
}

// function addVolunteer (newVol) {
//   return db('volunteers').insert(newVol)
// }

function deleteVolunteer (id) {
  return db('volunteers')
    .where('id', id).del()
}
