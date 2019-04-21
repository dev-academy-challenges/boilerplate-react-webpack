const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/', (req, res) => {
  db.getTargets()
    .then(targets => {
      res.send(targets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.newTarget(req.body)
    .then(res.sendStatus(200))
})

module.exports = router
