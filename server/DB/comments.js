const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')

module.exports = {
  getComment,
  addComment
}

function getComment (id, db = connection) {
  return db('comments')
    .where('userId', id)
    .first()
}

function addComment (newComment, db = connection) {
  return db('comments')
    .insert(newComment)
    .then(() => db('comments').select())
}
