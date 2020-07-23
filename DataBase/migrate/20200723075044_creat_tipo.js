
exports.up = function(knex) {
  return knex.schema.createTable('Tipo', function (table) {
  table.increments('idTipo');
  table.string('nomeTipo').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Tipo');
};
