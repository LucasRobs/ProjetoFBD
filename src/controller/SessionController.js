const connection = require ('../../DataBase/connection');
module.exports = {
  async create(req, res){
    
    const { login, senha } = req.body;
    const session = await connection('LoginAdmin')
    .where('loginAdmin', login).andWhere('senhaAdmin',senha)
    .select('*')
    .first();
    if(!session){
      return res.status(400).json({error: 'Conta não encontrada'})
    }
    return res.json(session);
  },
  async index(req, res){
    return res.render("addProduto.html");
  } 
}
