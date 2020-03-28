import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const ongId = localStorage.getItem('ong_id');
  const ongName = localStorage.getItem('name');
  const [casos, setCasos] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then((response) => {
      setCasos(response.data);
    }).catch((err) => {
      alert('Erro ao carregar os casos.');
    })

  }, [ongId])

  async function handleDelete(caso_id) {

    try {
      await api.delete(`incidents/${caso_id}`, {
        headers: {
          Authorization: ongId
        }
      })

      setCasos(casos.filter(caso => caso_id !== caso.id));

    } catch (error) {
      alert('Erro ao deletar o caso.');
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');

  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo Heroes" />
        <span>Ben vinda, {ongName}</span>

        <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {
          casos.map(caso => (

            <li key={caso.id}>
              <strong>CASO:</strong>
              <p>{caso.title}</p>

              <strong>DESCRIÇÃO:</strong>
              <p>{caso.description}</p>

              <strong>VALOR:</strong>
              <p>
                {
                  Intl.NumberFormat('pt-BR',
                    { style: 'currency', currency: 'BRL' })
                    .format(caso.value)
                }
              </p>

              <button onClick={() => handleDelete(caso.id)} type="button">
                <FiTrash2 size={20} color="#b4b4b4" />
              </button>
            </li>

          ))
        }
      </ul>
    </div>
  );
};
