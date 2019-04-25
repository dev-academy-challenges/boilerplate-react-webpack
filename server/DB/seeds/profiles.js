exports.seed = function (knex, Promise) {
  return knex('widgets').del()
    .then(function () {
      return knex('widgets').insert([
        { id: 1, name: 'Ihaka Pink', age: 21, year: 13, house: '', comments: '' },
        { id: 2, name: 'Paul Renwick', age: 38, year: 13, house: '', comments: '' },
        { id: 3, name: 'J Taps', age: 18, year: 13, house: '', comments: '' },
        { id: 4, name: 'Jeff Buckley', age: 40, year: 13, house: '', comments: '' },
        { id: 5, name: 'Emily', age: 22, year: 13, house: '', comments: '' },
        { id: 6, name: 'Goku', age: 100, year: 13, house: '', comments: '' },
        { id: 7, name: 'Samurai Jack', age: 25, year: 13, house: '', comments: '' }
      ])
    })
}
