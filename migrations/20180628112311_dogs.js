exports.up = (knex, Promise) => {
  return knex.schema.createTable('dogs', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('breed')
    table.integer('volunteer_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('dogs')
}
