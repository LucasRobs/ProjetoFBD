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
    
    <div id="page-apagar">
    <form action="">
        <h4>Deseja realmente excluir esse Produto?</h4>
        <div class="botoes">
            <button type="submit">SIM</button>
            <button type="submit">NÂO</button>
          </div>
        
    </form>
  
</div>



  );
}