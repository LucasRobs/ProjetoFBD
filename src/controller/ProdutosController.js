const connection = require ('../../DataBase/connection');
const { andWhere } = require('../../DataBase/connection');
module.exports = {
  async index (req, res){
    const { page = 1 } = req.query;
    const [count] = await connection('Produtos').count();
    const produtos = await connection('Produtos')
    .limit(15)
    .offset((page - 1) * 15)
    .select('*');

    res.header('total-Produtos', count['count()']);
    return res.json(produtos);
  },

  async create(req, res){
    const {
      nomeProduto, precoProduto,descricaoProduto,pesoProduto,imgProduto,nomeTipo
    } = req.body;
    await connection('Produtos').where('nomeProduto', nomeProduto).select();
    await connection('Produtos').insert({
      nomeProduto,
      precoProduto,
      descricaoProduto,
      pesoProduto,
      imgProduto,
      nomeTipo
    })
    return res.json("deu certo vetim");
  },
  async delete(req, res){
    const { id } = req.params;
    await connection('Produtos').where('idProduto', id).delete();
    return res.status(204).send();
  },
  async ProdutosPorID (req, res){
    const { id } = req.params;
    const produtos = await connection('Produtos').where('idProduto',id).select('*');
    return res.json(produtos);
  },
  async EditarProduto(req, res){
    const {
      nomeProduto, precoProduto,descricaoProduto,pesoProduto,imgProduto,nomeTipo
    } = req.body;
    const { id } = req.params;
    await connection('Produtos').where('idProduto', id).update(
      req.body
    );
    return res.json("deu certo vetim");
  },
};