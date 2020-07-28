import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
  const[login, setlogin] = useState('');
  const[senha, setsenha] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
      try{
        const response = await api.post('login', { login, senha });
        alert(`deu foi certo hahaha`);
        localStorage.setItem('SessionId', response);
        localStorage.setItem('nome', response.data.nomeAdmin);
        history.push('/'); 
    }catch(err){
      alert('falha no login, tente novamente')
    }
  }
  return(
    <div id="page-login">  
        <form onSubmit={handleLogin}>
            <img src={logoImg} alt="logomarca"/>
          <fieldset>
            <div className="field">
              <input 
                type="text" 
                name="name" 
                placeholder="nome"
                value={login}  
                onChange={e => setlogin(e.target.value)} 
                required/>
            </div>
            <div className="field">
              <input 
                type="password" 
                name="senha"  
                placeholder="senha" 
                value={senha}  
                onChange={e => setsenha(e.target.value)}
                required/>
            </div>
            <button type="submit">Login</button>
          <Link className="back-link" to="/cadastrar"> 
          <FiLogIn size={16} color="#E02041"/>
          Não tenho cadastro
          </Link>
          </fieldset>
        </form>
      </div>
  );
}