exports.up = (knex, Promise) => {
  return knex.schema.createTable('targets', (table) => {
    table.increments('id').primary()
    table.string('target')
    table.string('scores')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('targets')
}
