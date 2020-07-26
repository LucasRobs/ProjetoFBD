import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
export default function Logon(){
  const[nomeProduto, setnomeProduto] = useState('');
  const[precoProduto, setprecoProduto] = useState('');
  const[descricaoProduto, setdescricaoProduto] = useState('');
  const[pesoProduto, setpesoProduto] = useState('');
  const[imgProduto, setimgProduto] = useState('');
  const[nomeTipo, setnomeTipo] = useState('');
  
  const history = useHistory();

  async function handleProduto(e){
    e.preventDefault();
      try{
        const response = await api.post('Produtos', { nomeProduto, precoProduto, descricaoProduto, pesoProduto, imgProduto, nomeTipo });
        alert(`deu foi certo mamae hahaha`);
        history.push('/'); 
    }catch(err){
      alert('falha!!! ai meu deus papai ;-;')
    }
  }

  return(
    <div id="page-addProdutos">
        <form onSubmit={handleProduto}>
            <fieldset>
                    <legend>
                        <h3>Adicionar Produto</h3>
                    </legend>

                    <div class="field">
                        <label for="name">Nome:</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={nomeProduto}  
                        onChange={e => setnomeProduto(e.target.value)}
                        required/>
                    </div>
                    <div class="field-group">
                        <div class="field">
                            <label for="valor">Preço:</label>
                            <input 
                            type="text" 
                            name="valor" 
                            value={precoProduto}  
                            onChange={e => setprecoProduto(e.target.value)}
                            required/>

                        </div>
                        <div class="field">
                            <label for="valor2">peso:</label>
                            <input 
                            type="text" 
                            name="valor2" 
                            value={pesoProduto}  
                            onChange={e => setpesoProduto(e.target.value)}
                            required/>

                        </div>
                    </div>
                    <div class="field-group">
                        <div class="field">
                            <label for="img">imagem:</label>
                            <input type="text" 
                            name="img" 
                            placeholder="Procurar documento" 
                            value={imgProduto}  
                            onChange={e => setimgProduto(e.target.value)}
                            required/>
                        </div>
                        <div class="field">
                            <label for="tipo">Tipo:</label>
                            <input type="text" 
                            name="tipo" 
                            placeholder="Procurar documento" 
                            value={nomeTipo}  
                            onChange={e => setnomeTipo(e.target.value)}
                            required/>
                        </div>
                    </div>
                    <textarea 
                        placeholder="Descrição" 
                        value={descricaoProduto}
                        onChange={e => setdescricaoProduto(e.target.value)}
                    />
            </fieldset>
            <button type="submit">Cadastrar</button>
        </form>
    </div>
  );
}