const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.json())

const db = require('../db/db')


router.get('/Cars', (req, res) => {
  db.getCars()
  .then(result => { res.json(result) })
})

module.exports = router

