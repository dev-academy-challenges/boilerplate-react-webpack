exports.up = (knex, Promise) => {
  return knex.schema.createTable('events', table => {
    table.increments('id').primary()
    table.string('name')
    table.date('start_date')
    table.date('end_date')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('events')
}
