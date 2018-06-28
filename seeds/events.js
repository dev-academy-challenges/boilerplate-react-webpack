exports.seed = (knex, Promise) => {
  return knex('events').del()
    .then(() => {
      return knex('events').insert([
        {id: 20181, name: 'Street Appeal', start_date: '2018-03-08', end_date: '2018-03-10'}
      ])
    })
}
