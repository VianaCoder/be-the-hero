import React, { useState } from 'react';

import './style.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from  '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

function Register(){
    return(
        <div className="register_page">
            <div className="register_block">
                <section className="left_page">
                    <img src={logoImg} alt="logo"/>

                    <h1>Cadastro</h1>
                    <p>Faça um cadastro, entre na plataforma e pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="voltar" to= "/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para Logon
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" Name="Mail" placeholder="E-Mail" />
                    <input placeholder="WhatsApp" />

                    <section className="cidade_url">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width: 80}}/>
                    </section>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
};

export default Register;