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
  const SessionId = localStorage.getItem('SessionId.data.idAdmin');

  useEffect(() => {
    api.get('',{
      headers: {
        Authorization: SessionId,
      }
    }).then(response => {
      setprodutos(response.data);
    })
  }, [SessionId]);
  /*
  async function handleDeleteIncident(id){
    try{
      await api.delete(`incidents/${id}`,{
        headers:{
          Authorization: SessionId,
        }
      });
      setprodutos(incidents.filter(incidents => incidents.id !== id));
    }catch(err){
      alert('erro de deletar caso');
    
    }
  }
*/
  return(
    <div id="page-produtos">
      <header>
          <img src={logoImg} alt="logomarca"/>
          <a href="addProdutos">
              <FiPlusCircle color="#3A2C51"/>
          </a>
      </header>
  <h6>Bem Vindo ao sistema de administração { nome }</h6>
        <div class="produtos">
          <ul>
          {produtos.map(produto => (
            <li key={produto.idProduto}>
                <img src={foto} alt=""/>
                <div class="menu">
                <div class="field">
                  <strong>Cod: <h7> {produto.idProduto}</h7></strong>
                  <strong>Nome: <h7>{produto.nomeProduto}</h7></strong>
                <div class="field-group">
                  <strong>Preço: <h7> {produto.precoProduto}</h7></strong>
                  <strong>Peso: <h7> {produto.pesoProduto}</h7></strong>
                </div>
                </div>
                <div class="botoes">
                  <div class="apagar">
                    <a href="apagar">
                        <FiTrash2 color="#3A2C51"/>
                    </a>
                  </div>
                  <div class="editar">
                    <a href="editar" class="editar">
                        <FiEdit  color="#3A2C51"/>
                    </a>
                  </div>
                </div>
                </div>
            </li>
          ))};
          </ul>
        </div>
  </div>
  );
}