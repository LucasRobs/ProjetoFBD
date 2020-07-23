
exports.up = function(knex) {
  return knex.schema.createTable('LoginAdmin', function (table) {
  table.string('loginAdmin').notNullable();
	table.string('senhaAdmin').notNullable();
	table.integer('statusAdmin').notNullable();
	table.string('nomeAdmin').notNullable();
  table.increments('idAdmin').primary();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('LoginAdmin');
};
