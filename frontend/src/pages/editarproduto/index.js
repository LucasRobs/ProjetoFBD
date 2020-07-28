import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import foto from '../../assets/produto.svg';

import api from '../../services/api';
import './styles.css';
export default function Logon() {
  const [nomeProduto, setnomeProduto] = useState('');
  const [precoProduto, setprecoProduto] = useState('');
  const [descricaoProduto, setdescricaoProduto] = useState('');
  const [pesoProduto, setpesoProduto] = useState('');
  const [nomeTipo, setnomeTipo] = useState('');
  const [imgProdutolocal, setimgProdutolocal] = useState('');
  var imgProduto = null;
  const [produtos, setprodutos] = useState([]);
  
  const ProdutoId = localStorage.getItem('ProdutoId');
  const SessionId = localStorage.getItem('SessionId').idAdmin;

  const history = useHistory();
  const CLIENT_ID = '33e6bf969c0a62a';
  const gallery = document.getElementById('gallery');
  const doUpload = (url, options) => {
    const promiseCallback = (resolve, reject) => {

      const getFetchJson = (response) => {
        if (!response.ok) return reject(response);
        return response.json().then(resolve);
      }

      fetch(url, options)
        .then(getFetchJson)
        .catch(reject);
    };
    return new Promise(promiseCallback);
  };

  useEffect(() => {
    api.get(`Produtos/${ProdutoId}`, {
      headers: {
        Authorization: SessionId,
      }
    }).then(response => {
      setprodutos(response.data);
    })
  }, [SessionId]);

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
  function voltar(){
    history.push('/');
  }
  async function handleEditarProduto(e) {
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
    try {
      
      console.log({nomeProduto, precoProduto, descricaoProduto, pesoProduto, imgProduto, nomeTipo});
      const response = await api.put(`Editar/${ProdutoId}`, { nomeProduto , precoProduto, descricaoProduto, pesoProduto, imgProduto, nomeTipo });
      alert(`deu foi certo mamae hahaha`);
      history.push('/'); 
    } catch (err) {
      alert('falha!!! ai meu deus papai ;-;')
    }
  }
  return (
    <div id="editarprodutos">
      <header>
      </header>
      {produtos.map(produtos => (
        <form onSubmit={handleEditarProduto} key={produtos.idProduto}>
          <legend>
            <h2>Editar Produto</h2>
          </legend>
          <div class="field">
            <label for="name">Nome:</label>
            <input
              type="text"
              name="name"
              placeholder={produtos.nomeProduto}
              value={nomeProduto}
              onChange={e => setnomeProduto(e.target.value)}
               />
            <div class="fieldGrup">
              <div>
                <label for="valor">Preço:</label>
                <input
                  type="text"
                  name="valor"
                  placeholder={produtos.precoProduto}
                  value={precoProduto}
                  onChange={e => setprecoProduto(e.target.value)}
                   />
              </div>
              <div class="margin">
                <label for="valor2">Peso:</label>
                <input
                  type="text"
                  name="valor2"
                  placeholder={produtos.precoProduto}
                  value={pesoProduto}
                  onChange={e => setpesoProduto(e.target.value)}
                   />
              </div>
            </div>
            <div class="fieldGrup">
              <div>
                <div class="fieldGrup">
                  <div class="fieldGrupimg">
                    <label for="tipo">Tipo:</label>
                    <input type="text"
                      name="tipo"
                      placeholder={produtos.nomeTipo}
                      value={nomeTipo}
                      onChange={e => setnomeTipo(e.target.value)}
                       />
                    <label for="img">imagem:</label>
                    <input type="file"
                      name="file"
                      id="file"
                      placeholder="Procurar documento"
                      placeholder={produtos.imgProduto}
                      value={imgProdutolocal}
                      onChange={e => setimgProdutolocal(e.target.value)}
                       />
                  </div>
                  <img src={produtos.imgProduto} alt="produto" img />
                </div>

              </div>
            </div>
            <div class="fieldGrup">
              <div>
                <label for="valor">Descrição:</label>
                <textarea
                  placeholder={produtos.descricaoProduto}
                  value={descricaoProduto}
                  onChange={e => setdescricaoProduto(e.target.value)}
                />
              </div>
              <div class="GrupBotton">
                <button type="submit">Editar</button>

                <button onClick={() => voltar()} >Voltar</button>

              </div>
            </div>
          </div>
        </form>
      ))}
    </div>
  );
}
