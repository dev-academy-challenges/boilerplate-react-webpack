const express = require('express')
const router = express.Router()
const request = require('superagent')

const {getCar, getCars} = require('../db/cars')


router.get('/', (req, res) => {
  getCars()
    .then(result => res.json(result))
    .catch(err => res.status(err).end)  
})

router.get('/view/:id', (req, res) => {
  let {id} = req.params
  getCar(id)
    .then(result => res.json(result))
    .catch(err => res.status(err).end)
})
module.exports = router

