import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';
export default function Logon(){
  const[nomeProduto, setnomeProduto] = useState('');
  const[precoProduto, setprecoProduto] = useState('');
  const[descricaoProduto, setdescricaoProduto] = useState('');
  const[pesoProduto, setpesoProduto] = useState('');
  const[nomeTipo, setnomeTipo] = useState('');
  const[imgProdutolocal, setimgProdutolocal] = useState('');
  var imgProduto = null;
  
  const history = useHistory();
  const CLIENT_ID = '33e6bf969c0a62a';
  const gallery = document.getElementById('gallery');
  const doUpload = (url, options) => {
    const promiseCallback = (resolve, reject) => {

      const getFetchJson = (response) => {
        if(!response.ok) return reject(response);
        return response.json().then(resolve);
      }

      fetch(url, options)
        .then(getFetchJson)
        .catch(reject);
    };
    return new Promise(promiseCallback);
  };

  const onSuccess = (result) => {
    const { data: { link } } = result;
        //addImage(link);
        imgProduto = link;
    };
/*
  const addImage = (url) => {
    gallery.innerHTML += `<img src="${url}" width="300" />`; 

  }
*/
  async function handleProduto(e){
    e.preventDefault();
    const file = document.getElementById('file');
    const data = new FormData();
    data.append('image', file.files[0]);

    await doUpload('https://api.imgur.com/3/image', {
      method: 'POST',
      body: data,
      headers: {
        'Authorization': `Client-ID ${CLIENT_ID}`,
      }
    }).then(onSuccess)
    .catch(console.error);
    try{
        const response = await api.post('Produtos', { nomeProduto, precoProduto, descricaoProduto, pesoProduto, imgProduto, nomeTipo });
        alert(`deu foi certo mamae hahaha`);
        //history.push('/'); 
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
                            <input type="file" 
                            name="file" 
                            id="file" 
                            placeholder="Procurar documento" 
                            value={imgProdutolocal}  
                            onChange={e => setimgProdutolocal(e.target.value)}
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