
exports.up = function(knex) {
  return knex.schema.createTable('Produtos', function (table) {
  table.increments('idProduto');
	table.string('nomeProduto').notNullable();
	table.decimal('precoProduto').notNullable();
	table.string('descricaoProduto').notNullable();
	table.decimal('pesoProduto').notNullable();
  table.string('imgProduto').notNullable();
  table.string('nomeTipo').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('Produtos');
};
