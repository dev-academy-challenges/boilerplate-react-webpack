const express = require('express')
const db = require('../db/categories')
const router = express.Router()

router.get('/', (req, res) => {
  db.getCategories()
    .then(categories => {
      res.send(categories)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getCategory(id)
    .then(category => res.send(category))
    .catch(err => res.status(500).send(err.message))
})

router.post('/', (req, res) => {
  db.addCategory(req.body)
    .then(categories => {
      res.send(categories)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
