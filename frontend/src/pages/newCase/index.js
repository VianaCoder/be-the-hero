import React, { useState } from 'react';

import './style.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from  '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function NewCase(){
    return(
        <div className="case_page">
            <div className="case_block">
                <section className="left_page">
                    <img src={logoImg} alt="logo"/>

                    <h1>Cadastro de Caso</h1>
                    <p>Descreva o caso para que um de nossos heroís possa lhe ajudar.</p>

                    <Link className="voltar" to= "/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar
                    </Link>
                </section>
                <form>
                    <input placeholder="Título do Caso" />
                    <textarea Name="description" placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
};

export default NewCase;