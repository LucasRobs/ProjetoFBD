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
    
    <div id="page-addProdutos">

    
       <form action="">
           <fieldset>
                <legend>
                    <h3>Adicionar Produto</h3>
                </legend>

                <div class="field">
                    <label for="name">Nome:</label>
                    <input type="text" name="name" required/>
                </div>

                <div class="field-group">
                    <div class="field">
                        <label for="valor">Preço:</label>
                        <input type="text" name="valor" required/>

                    </div>
                    <div class="field">
                        <label for="valor2">peso:</label>
                        <input type="text" name="valor2" required/>

                    </div>
                </div>
                <div class="field">
                    <label for="qtd">Quantidade:</label>
                    <input type="text" name="qtd" required/>
                </div>
                <div class="field">
                    <label for="img">imagem:</label>
                    <input type="text" name="img" placeholder="Procurar documento" required/>
                    
                </div>
                

             
           </fieldset>

           <button type="submit">Cadastrar</button>

       </form>
</div>


  );
}