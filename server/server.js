var express = require('express')
var bodyParser = require('body-parser')

var PORT = process.env.PORT || 3000
var app = express()

app.use(bodyParser.json())
app.use(express.static('static'))

app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
