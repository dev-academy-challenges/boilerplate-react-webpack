const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.get('/Find', (req, res) => {
  db.then(Cars => {
    res.render(Cars)
  })
})

module.exports = router


