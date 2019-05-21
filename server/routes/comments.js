const express = require('express')
const db = require('../db/comments')
const router = express.Router()

router.get('/', (req, res) => {
  db.getComments()
    .then(comments => {
      res.send(comments)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.addComment(req.body)
    .then(comments => {
      res.send(comments)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getComment(id)
    .then(comment => res.send(comment))
    .catch(err => res.status(500).send(err.message))
})

router.delete('/', (req, res) => {
  db.deleteComment(req.body)
    .then(res.redirect('/comments'))
})

module.exports = router
