const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getCars () {
  return knex('cars')
  .select()
}

function getCar (id) {
  return knex('cars').where('id',id).first()
}

module.exports = {
  getCars: getCars
}