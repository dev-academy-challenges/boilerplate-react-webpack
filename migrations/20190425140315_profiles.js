
exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.integer('age')
    table.string('year')
    table.integer('house')
    table.integer('comments')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}