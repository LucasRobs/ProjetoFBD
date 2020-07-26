const connection = require ('../../DataBase/connection');

module.exports = {
  async index (req, res){
    const admins = await connection('LoginAdmin').select('*');
    return res.json(admins);
  },
  async create(req, res){
    const {loginAdmin, nomeAdmin, senhaAdmin, statusAdmin} = req.body;
    const login = await connection('LoginAdmin')
    .where('loginAdmin',loginAdmin)
    .select('nomeAdmin')
    .first();
    if(login){
      return res.status(400).json({error: 'Login já existe!'})
    }
    await connection('LoginAdmin').insert({
      loginAdmin,
      nomeAdmin,
      senhaAdmin,
      statusAdmin, 
    })
    return res.json("deu certo vetim");
  }
};