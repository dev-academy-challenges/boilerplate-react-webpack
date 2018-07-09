exports.up = (knex, Promise) => {
  return knex.schema.createTable('volunteers', table => {
    table.increments('id').primary()
    table.date('date_added')
    table.string('email')
    table.string('password')
    table.string('first_name')
    table.string('last_name')
    table.string('phone')
    table.date('dob')
    table.string('gender')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('volunteers')
}
