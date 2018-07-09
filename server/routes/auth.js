const express = require('express')

const router = express.Router()

const {volunteerExists, createVolunteer} = require('../db/volunteers')

router.post('/register', register)

function register (req, res, next) {
  volunteerExists(req.body.email)
    .then(exists => {
      if (exists) {
        return res.status(400).send('Email already exists')
      }
      createVolunteer(req.body.email, req.body.password)
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

module.exports = router
