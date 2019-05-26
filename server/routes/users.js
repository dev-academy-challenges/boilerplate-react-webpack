const express = require('express')
const db = require('../db/users.js')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getUserById(id)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err.message))
})


router.put('/:id', (req, res) => {
  const id = req.params.id
  const submission = {
    userId: id,
    userName: req.body.userName
  }
  db.submitUsers(submission)
    .then(() => res.json({ notice: 'Evidence has been updated!' }))
    .catch(err => res.status(500).send(err.message))
})
module.exports = router
