exports.up = (knex, Promise) => {
  return knex.schema.createTable('friends', table => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('phone')
    table.string('email')
    table.integer('volunteer_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('friends')
}
