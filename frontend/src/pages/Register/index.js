import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Modal, Button } from 'react-bootstrap';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';


export default function Register() {

  const [show, setShow] = useState(false);

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
      localStorage.setItem('create_ong_id', response.data.id)
      setShow(true)

    } catch (error) {
      alert(`Erro no cadastro: ${error} `);

    };
  };

  function handleClose() {
    setShow(false)
    history.push('/');
  };

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo Heroes" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
          os casos da sua ONG</p>
          <Link to="/" size={16} className="back-link" color='#E02041'
          style={{ textDecoration: 'none', color: 'rgb(73, 73, 80)' }} >
            <FiArrowLeft size={18} color="#E02041" />
              Não tenho cadastro
           </Link>
        </section>

        <form onSubmit={handleRegister} >
          <input
            placeholder="Nome da ONG"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            type="tel"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-groups">
            <input
              placeholder="Cidade"
              type="text"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              type="text"
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ background: '#E02041', borderColor: '#E02041' }} closeButton>
          <Modal.Title style={{ color: '#000000' }} >Cadastrado com sucesso!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#E02041', borderColor: '#E02041' }}  >
          <h5 style={{ color: '#fff' }} > Seu ID de acesso é:
             <strong style={{ color: '#000000' }}> {localStorage.getItem('create_ong_id')} </strong>
          </h5>
        </Modal.Body>
      </Modal>

    </div>
  );

}