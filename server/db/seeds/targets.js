exports.seed = function (knex, Promise) {
  return knex('targets').del()
    .then(function () {
      return knex('targets').insert([
        { id: 1, target: 'Brush' },
        { id: 2, target: 'Ball' },
        { id: 3, target: 'Balloon' }

      ])
    })
}
