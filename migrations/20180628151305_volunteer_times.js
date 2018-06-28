exports.up = (knex, Promise) => {
  return knex.schema.createTable('volunteer_times', table => {
    table.increments('id').primary()
    table.integer('volunteer_id')
    table.integer('friend_id')
    table.integer('dog_id')
    table.integer('event_time_id')
    table.string('pencilled')
    table.string('confirmed')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('volunteer_times')
}
