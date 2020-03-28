import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };


    try {

      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso é: ${response.data.id}`);
      history.push('/');
    } catch (error) {
      alert(`Erro no cadastro: ${error} `);

    };
  };

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

        <form onSubmit={handleRegister} >
          <input
            placeholder="Nome da ONG"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            type="tel"
            required
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="cidade"
              type="text"
              required
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              type="text"
              required
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>
    </div>
  );

}