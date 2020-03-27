import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import logoImg from '../../assets/logo.svg';

export default function Register() {

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Heroes" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG</p>
          <Link to="/" size={16} className="back-link" color='#E02041' >
            <FiArrowLeft />
              Não tenho cadastro
           </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" type="text" />
          <input placeholder="E-mail" type="email" />
          <input placeholder="Whatsapp" type="tel" />

          <div className="input-group">
            <input placeholder="cidade" type="text" />
            <input placeholder="UF" type="text" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>
    </div>
  );

}