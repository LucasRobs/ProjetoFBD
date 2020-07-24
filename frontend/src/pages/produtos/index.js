import React, {useState} from 'react';
import { FiTrash2 , FiEdit , FiSend} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import adicionar from '../../assets/logo.svg';

export default function Produtos(){
  return(
    <div id="page-produtos">
      <header>
          <img src={logoImg} alt="logomarca"/>
          <a href="addProdutos">
              <img src="./imagens/adicionar.svg" alt=""/>
          </a>
      </header>
      <h6>Bem Vindo ao sistema de administração</h6>
        <div class="produtos">
          <ul>
            <li key="1">
                <img src="/imagens/produto.svg" alt=""/>
                <div class="menu">
                <div class="field">
                  <strong>Cod: <h7> 1</h7></strong>
                  <strong>Nome: <h7> Pera</h7></strong>
                <div class="field-group">
                  <strong>Preço: <h7> 2,45</h7></strong>
                  <strong>Peso: <h7> 0.250kg</h7></strong>
                </div>
                  <strong>Qtd: <h7> 2</h7></strong>
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
          </ul>
        </div>
  </div>
  );
}