exports.seed = (knex, Promise) => {
  return knex('events').del()
    .then(() => {
      return knex('events').insert([
        {id: 20181, name: 'Street Appeal', start_date: '2018-03-08', end_date: '2018-03-10', location: 'New Zealand'},
        {id: 20182, name: 'Cupcake Day', start_date: '2018-08-06', end_date: '2018-08-06', location: 'New Zealand'},
        {id: 20183, name: 'Auckland Marathon', start_date: '2018-10-28', end_date: '2018-10-28', location: 'Auckland'}
      ])
    })
}
