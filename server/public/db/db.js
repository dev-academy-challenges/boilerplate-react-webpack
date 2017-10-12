const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getCars () {
  return knex('cars-info')
}

module.exports = {
  getCars: getCars
}