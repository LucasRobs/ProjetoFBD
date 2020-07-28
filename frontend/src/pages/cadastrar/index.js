import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
  const [nomeAdmin, setnome] = useState('');
  const [loginAdmin, setlogin] = useState('');
  const [senhaAdmin, setsenha] = useState('');
  const [statusAdmin, setstatus] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data = {
      loginAdmin,
      nomeAdmin, 
      senhaAdmin,
      statusAdmin
    }
    setstatus(1);

    try{
        const response = await api.post('Admin', data);
        alert(`deu foi certo hahaha`);
        history.push('/login');
    }catch(err){
      if(err == 400){
        alert('Esse login ja existe!')
      }else
      alert('Falha no cadastro, tent e novamente')
    }
  }
  return(
    <div id="page-cadastro-adm">
        <form onSubmit={handleRegister}>
            <fieldset>
                <img src={logoImg} alt="logomarca"/>
                <h3>Cadastrar Administrador</h3>
                 <div class="field">
                     <label for="nameAdmin">Nome:</label>
                     <input 
                     value = {nomeAdmin} 
                     onChange = {e => setnome(e.target.value)} 
                     required/>
                     <label for="loginAdmin">Login:</label>
                     <input 
                     value = {loginAdmin} 
                     onChange = {e => setlogin(e.target.value)} 
                     required/>
                     <label for="senhaAdmin">Senha:</label>
                     <input 
                        type="password" 
                        name="Senha"
                        value={senhaAdmin}  
                        onChange={e => setsenha(e.target.value)}
                        required
                     />
                </div>
            </fieldset>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
  );
}