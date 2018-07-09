exports.up = (knex, Promise) => {
  return knex.schema.createTable('volunteer_times', table => {
    table.increments('id').primary()
    table.integer('volunteer_id')
    table.integer('event_time_id')
    table.boolean('pencilled').defaultsTo(false)
    table.boolean('confirmed').defaultsTo(false)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('volunteer_times')
}
