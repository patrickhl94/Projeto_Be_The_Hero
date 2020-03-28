import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Heroes" />

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link to="/profile" size={16} className="back-link" color='#E02041' >
            <FiArrowLeft />
              Voltar para Home
           </Link>
        </section>

        <form>
          <input placeholder="Titulo do caso" type="text" />
          <textarea placeholder="Descrição" type="email" />
          <input placeholder="Valor em reais" type="tel" />
      
          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>
    </div>
  );
};