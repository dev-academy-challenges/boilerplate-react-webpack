const connection = require('./connection')

module.exports = {
  volunteerExists,
  createVolunteer
}

function volunteerExists (email, conn) {
  const db = conn || connection
  return db('volunteers')
    .count('id')
    .where('email', email)
    .then(count => {
      return count[0].id > 0
    })
}

function createVolunteer (email, password, conn) {
  const db = conn || connection
  return db('volunteers')
    .insert({
      email,
      password
    })
}
