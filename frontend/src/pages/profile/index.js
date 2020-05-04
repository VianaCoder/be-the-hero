import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';

import logoImg from  '../../assets/logo.svg';
import { FiPower, FiTrash } from 'react-icons/fi'

function Profile() {

    let ongName = localStorage.getItem('ongName');

    return(
        <div className="profile_block">
            <header>
                <section className="left">
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>
                </section>

                <section className="right">
                <Link to="/incidents/new" className="button">Cadastrar Novo Caso</Link>
                <button><FiPower size={24} color="#E02041" className="power"/></button>
                </section>
            </header>

            <h1>Casos Cadastrados:</h1>
            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Nome do Caso</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descriçao do Caso</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash size={18} className="delete"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Nome do Caso</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descriçao do Caso</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash size={18} className="delete"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Nome do Caso</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descriçao do Caso</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash size={18} className="delete"/></button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Nome do Caso</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descriçao do Caso</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>
                    <button><FiTrash size={18} className="delete"/></button>
                </li>
            </ul>




        </div>
    );
}

export default Profile;