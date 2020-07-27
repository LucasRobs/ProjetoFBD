import React, { useState , useEffect } from 'react';
import { FiTrash2 , FiEdit , FiPlusCircle} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import foto from '../../assets/produto.svg';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

export default function Produtos(){
  const [produtos , setprodutos] =  useState([]);
   
  const nome = localStorage.getItem('nome');
  const SessionId = localStorage.getItem('SessionId');

  useEffect(() => {
    api.get('Produtos',{
      headers: {
        Authorization: SessionId,
      }
    }).then(response => {
      setprodutos(response.data); 
    })
  }, [SessionId]);
  
  async function handleDeleteIncident(id){
    if (window.confirm('Tem certeza que quer apagar isso?!')) {
      await api.delete(`Produtos/${id}`);
      try{
          setprodutos(produtos.filter(produtos => produtos.idProduto !== id));
        }catch(err){
          alert('erro de deletar caso');
          
        }
    }else{
      alert("cancelado");
    }
  }

  async function handleEdit(id){
    //history.push('/editar'); 
  }

  return(
    <div id="page-produtos">
      <header>
          <img src={logoImg} alt="logomarca"/>
          <a href="addProduto">
              <FiPlusCircle color="#3A2C51"/>
          </a>
      </header>
  <h6>Bem Vindo ao sistema de administração { nome }</h6>
        <div class="produtos">
          <ul>
          {produtos.map(produtos => (
            <li key={produtos.idProduto}>
                <img src={foto} alt=""/>
                <div class="menu">
                <div class="field">
                  <strong>Cod: <h7> {produtos.idProduto}</h7></strong>
                  <strong>Nome: <h7>{produtos.nomeProduto}</h7></strong>
                <div class="field-group">
                  <strong>Preço: <h7> {produtos.precoProduto}</h7></strong>
                  <strong>Peso: <h7> {produtos.pesoProduto}</h7></strong>
                </div>
                </div>
                <div class="botoes">
                  <div class="apagar">
    
                    <button onClick={() => handleDeleteIncident(produtos.idProduto)} type="button">
                        <FiTrash2 color="#3A2C51"/>
                    </button>
                  </div>
                  <div class="editar">
                  <button onClick={() => handleEdit(produtos.idProduto)} type="button">
                          <FiEdit  color="#3A2C51"/>
                    </button>
                  </div>
                </div>
                </div>
            </li>
          ))}
          </ul>
        </div>
  </div>
  );
}