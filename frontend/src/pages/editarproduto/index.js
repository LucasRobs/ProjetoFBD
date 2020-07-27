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
    <div id="editarprodutos">

    
       <form action="">
           <header>
            <img src="/Frame.svg" alt="produto"img/>
           </header>
       
                <legend>
                    <h2>Editar Produto</h2>
                </legend>

                <div class="field">
                    <label for="name">Nome:</label>
                    <input type="text" name="name" required/>
                </div>

                
                    <div class="field">
                        <label for="valor">Preço:</label>
                        <input type="text" name="valor" required/>

                    </div>
                    <div class="field">
                        <label for="valor2">peso:</label>
                        <input type="text" name="valor2" required/>

                    </div>

                    <div class="field">
                        <label for="qtd">Quantidade:</label>
                        <input type="text" name="qtd" required/>
                    </div>

                    <div>
                        <table>
                            <tr>
                            <td>
                                <div>
                                    <a class="button" href="(LINK)" style="float: right; border:1px solid; padding: 11px 71px; vertical-align: middle; background:red; color:white;border-radius:6px; font-size: 20px; font-family:helvetica, serif;text-decoration:none;">Voltar</a>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <a class="button" href="(LINK)" style="float: center; border:1px solid; padding: 11px 71px; vertical-align: middle; background:#2D888F; color:white;border-radius:6px; font-size: 20px; font-family:helvetica, serif;text-decoration:none;">Alterar</a>
                                </div>
                            </td>       
                            </tr>
                        </table>
                    </div>
            
       </form>
</div>

  );
}