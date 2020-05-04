import React, { useState, useEffect } from 'react';
import './style.css'
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api'

import logoImg from  '../../assets/logo.svg';
import { FiPower, FiTrash } from 'react-icons/fi'

function Profile() {

    const [incidents, setIncidents] = useState([]);
    const history = useHistory();

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongId]);

    async function handleDelte(id) {
        try {
            api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });
            
            setIncidents(incidents.filter(incident => incident.id !== id));

        }
        catch (err) {
            alert("Falha ao deletar, tente novamente!")
        }

    }

    function handleLogout() {
        localStorage.clear()
        history.push('/')
    }

    return(
        <div className="profile_block">
            <header>
                <section className="left">
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, {ongName}</span>
                </section>

                <section className="right">
                <Link to="/incidents/new" className="button">Cadastrar Novo Caso</Link>
                <button onClick={handleLogout}><FiPower size={24} color="#E02041" className="power"/></button>
                </section>
            </header>

            <h1>Casos Cadastrados:</h1>
            <ul>
                {incidents.map(incident => (
                     <li key={incident.id}>
                     <strong>CASO:</strong>
                     <p>{incident.title}</p>
 
                     <strong>DESCRIÇÃO:</strong>
                     <p>{incident.description}</p>
 
                     <strong>VALOR:</strong>
                     <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
                     <button onClick={ () => handleDelte(incident.id)}>
                         <FiTrash size={18} className="delete"/>
                    </button>
                 </li>
                ))}
            </ul>
        </div>
    );
}

export default Profile;