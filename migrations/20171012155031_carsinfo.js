
exports.up = function(knex, Promise) {
  knex.schema.createTableIfNotExists('cars-info', table => {
    table.increments();
    table.string('')
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('cars-info')
};
