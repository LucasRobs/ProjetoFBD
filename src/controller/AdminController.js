const connection = require ('../../DataBase/connection');

module.exports = {
  async index (req, res){
    const admins = await connection('LoginAdmin').select('*');
    return res.json(admins);
  },
  async create(req, res){
    const {loginAdmin, nomeAdmin, senhaAdmin, statusAdmin} = req.body;
    await connection('LoginAdmin').insert({
      loginAdmin,
      nomeAdmin,
      senhaAdmin,
      statusAdmin, 
    })
    return res.json("deu certo vetim");
  }
};