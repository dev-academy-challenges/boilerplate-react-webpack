const environment = process.env.NODE_ENV || 'development'
const config = require('../db/knexfile')[environment]
const connection = require('knex')

module.exports = {
  getComment,
  addComment,
  deleteComment
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

function deleteComment (id, db = connection) {
  return('comments')
  .where('id', id)
  .del()
}

function submitComments (newComment, db = connection ) {
  return db('comments')
  where({ userId: submission.userId })
  .update({ evidence: submission.evidence, date_modified: submission.date_modified })
}