const express = require('express')

const router = express.Router()

const {volunteerExists, createVolunteer} = require('../db/volunteers')

router.post('/register', register)

function register (req, res, next) {
  const {email, password} = req.body
  if (volunteerExists(email)) {
    return res.status(500).send('Email already exists')
  }
  createVolunteer(email, password)
    .then(() => next())
}

module.exports = router
