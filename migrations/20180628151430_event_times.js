exports.up = (knex, Promise) => {
  return knex.schema.createTable('event_times', table => {
    table.increments('id').primary()
    table.date('date')
    table.string('time_slot')
    table.integer('event_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('event_times')
}
