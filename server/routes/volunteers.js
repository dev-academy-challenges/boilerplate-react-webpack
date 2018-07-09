const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
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

router.put('/:id', (req, res) => {
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

// router.post('/', (req, res) => {
//   const newVol = req.body
//   db.addVolunteer(newVol)
//     .then(volunteer => {
//       res.status(200).end()
//     })
//     .catch(err => {
//     // eslint-disable-next-line no-console
//       console.error(err)
//       res.status(500).send('Unable to read from database')
//     })
// })

router.delete('/:id', (req, res) => {
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
