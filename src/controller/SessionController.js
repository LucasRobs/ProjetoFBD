const connection = require ('../../DataBase/connection');
const { response } = require('../routes');
module.exports = {
  async create(req, res){
    const { login, senha } = req.body;
    const session = await connection('LoginAdmin')
    .where('loginAdmin', login).andWhere('senhaAdmin',senha)
    .select('nomeAdmin')
    .first();
    if(!session){
      return res.status(400).json({error: 'Conta não encontrada'})
    }
    return res.json(session);
  } 
}