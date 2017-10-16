const express = require('express')
const db = require('../db/db')
const bodyParser = require('body-parser')
const request = require('superagent')
const router = express.Router()

router.use(bodyParser.json())

router.get('/cars', (req, res) => {
  db.getCars()
  .then(result => {
    res.json(result)
  })
})

module.exports = routes


