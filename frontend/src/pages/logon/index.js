import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Logon(){
  const[id, setId] = useState('');
  const history = useHistory();

  async function hendleLogin(e){
    e.preventDefault();
    try{
        const response = await api.post('sessions', { id });

        localStorage.setItem('ongId', id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
    }catch(err){
      alert('falha no login, tente novamente')
    }
  }
  return(
    <div id="page-login">  
        <form>
            <img src={logoImg} alt="logomarca"/>
          <fieldset>
            <div class="field">
              <label for="nome"></label>
              <input type="text" name="name" placeholder="nome" required/>
            </div>
            <div class="field">
              <label for="senha"></label>
              <input type="password" name="senha"  placeholder="senha" required/>
            </div>
            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>
  );
}