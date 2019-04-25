const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getProfiles,
  saveProfile,
  deleteProfile,
  updateProfile
}

function getProfiles (db = connection) {
  return db('profiles').select()
}

function saveProfile (profile, db = connection) {
  return db('profiles')
    .insert({
      name: profile.name,
      age: profile.age,
      house: profile.house,
      year: profile.year,
      comments: profile.comments
    })
}

function deleteProfile (id, db = connection) {
  return db('profiles')
    .where('id', id)
    .del()
}

function updateProfile (profiles, db = connection) {
  return db('profiles')
    .where('id', profiles.id)
    .update({
      name: profiles.name,
      age: profiles.age,
      house: profiles.house,
      year: profiles.year,
      rating: profiles.rating
    })
}
