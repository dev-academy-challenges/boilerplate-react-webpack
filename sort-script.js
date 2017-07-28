'use strict'

var names = shuffle( "Aaron Anthony Annelise Annah Ania Usha Carla Chris Gabriel Magda Mike Tom Rajal".split(' ') )
var teamNames = "unicorn chimera selkie".split(' ')

var teams = {}
teamNames.forEach( (t) => {
  teams[t] = []
})

for (var i=0; i<names.length; i++) {
  var teamName = teamNames[i%teamNames.length]
  teams[teamName].push(names[i])
}

console.log(JSON.stringify(teams,null,2))

function shuffle(input) {
  for (var i = input.length-1; i >=0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1))
    var itemAtIndex = input[randomIndex]

    input[randomIndex] = input[i]
    input[i] = itemAtIndex
  }
  return input
}
