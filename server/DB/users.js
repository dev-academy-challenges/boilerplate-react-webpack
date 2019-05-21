const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')(config)
const hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  getUserById,
  getUserByName
}

function createUser (username, password, db = connection) {
  return userExists(username, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => hash.generate(password))
    .then(passwordHash => {
      return db('users').insert({ username, hash: passwordHash })
    })
}

function userExists (username, db = connection) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserById (id, db = connection) {
  return db('users')
    .select('id', 'username')
    .where('id', id)
    .first()
}

function getUserByName (username, db = connection) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}
