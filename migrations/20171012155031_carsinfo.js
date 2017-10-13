
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('cars_info', function (table) {
    table.increments().primary();
    table.string('name');
    table.string('year');
    table.string('body');
    table.string('seats');
    table.string('origin');
    table.string('color');
    table.string('transmission');
    table.string('drive');
    table.string('odometer');
    table.string('fuel');
    table.string('engine');
    table.string('wof_exp');
    table.string('rego_exp');
    table.string('url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cars_info')
};
