const express = require('express')
const db = require('../db/admins.js')
const router = express.Router()

router.get(':/id', (req, res) => {
    const id = req.params.id
    db.getProfileById(id)
    .then(user => res.send(profile))
    .catch(err => res.status(500).send(err.message))
})

router.delete('/', (req, res) => {
    db.deleteProfile(req.body)
    .then(res.redirect('/profiles'))
})

router.put('/:id', (req, res) => {
    .then(() => res.json({ notice: 'Evidence has been updated'}))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router