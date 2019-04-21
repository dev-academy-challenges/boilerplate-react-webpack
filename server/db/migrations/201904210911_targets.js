exports.up = (knex, Promise) => {
  return knex.schema.createTable('targets', (table) => {
    table.increments('id').primary()
    table.string('target')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('targets')
}
