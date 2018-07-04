const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/volunteers', (req, res) => {
  db.getAllVolunteers()
    .then(volunteers => {
      res.json(volunteers)
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.get('/volunteers/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getVolunteer(id)
    .then(volunteer => {
      res.json({volunteer: volunteer})
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.put('/volunteers/:id', (req, res) => {
  const id = Number(req.params.id)
  db.editVolunteer(id)
    .then(volunteer => {
      res.status(200).end()
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.post('/volunteers', (req, res) => {
  const newVol = req.body
  db.addVolunteer(newVol)
    .then(volunteer => {
      res.status(200).end()
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

router.delete('/volunteers/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteVolunteer(id)
    .then(volunteer => {
      res.status(200).end()
    })
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
