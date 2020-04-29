import React, { useState } from 'react';
import './style.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from  '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

function Logon() {

    return(
        <div className="logon-block">
            <section className="form">
                <img src={logoImg} alt="logo" />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID" />

                    <button type="submit">Entrar</button>

                    <a href="/register">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                    </a>
                </form>
                
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}

export default Logon;