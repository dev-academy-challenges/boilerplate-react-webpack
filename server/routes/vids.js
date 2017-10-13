var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
    db.getVids()
        .then(vids => {
            res.json(vids)
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})

router.post('/', function (req, res) {
    db.saveVid(req.body)
        // 4. consumes the API
        .then(() => res.sendStatus(201))
    // 6. returns positive status as a response to the API.
})

module.exports = router