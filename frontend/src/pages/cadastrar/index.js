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
    
    
    <div id="page-cadastro-adm">

    
        <form action="">

            <fieldset>
                <img src="./imagens/Frame142x100.svg" alt="logomarca"/>
                <h3>Cadastrar Administrador</h3>
                 <div class="field">
                     <label for="name">Nome:</label>
                     <input type="text" name="name" required/>
                     <label for="login">Login:</label>
                     <input type="text" name="login" required/>
                     <label for="senha">Senha:</label>
                     <input type="password" name="Senha"required/>
                 
                
                </div>
              
            </fieldset>
 
            <button type="submit">Cadastrar</button>

        </form>
    </div>




  );
}