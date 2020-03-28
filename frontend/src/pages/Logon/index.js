import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import heroesImage from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const response = await api.post('session', { id })

      localStorage.setItem('ong_id', id)
      localStorage.setItem('name', response.data.name)
      history.push('/profile')
    } catch (error) {
      alert('Erro falha no login.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo Heroes" />

        <form onSubmit={handleLogin} >
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
          Não tenho cadastro
        </Link>
        </form>
      </section>

      <img src={heroesImage} alt="Heroes" />

    </div>
  )
}