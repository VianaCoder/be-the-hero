import React, { useState } from 'react';
import './style.css'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

import heroesImg from '../../assets/heroes.png';
import logoImg from  '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

function Logon() {
    const [id, setId] = useState('')
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try {
            const response = await api.post('session', {id});
            alert('Logado com Sucesso!')
            history.push('/profile')
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.ong.name);

        }
        catch (err) {
            alert(`Houve uma falha no login do ID: ${id} \n Verifique se ele está correto!`)
        }
    };

    return(
        <div className="logon-block">
            <section className="form">
                <img src={logoImg} alt="logo" />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />

                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register">
                    <FiLogIn size={16} color="#e02041" />
                    Não tenho cadastro
                    </Link>
                </form>
                
            </section>
            <img src={heroesImg} alt="heroes"/>
        </div>
    );
}

export default Logon;