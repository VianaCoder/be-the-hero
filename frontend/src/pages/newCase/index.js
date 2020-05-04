import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';

import './style.css'
import api from '../../services/api';
import logoImg from  '../../assets/logo.svg';

function NewCase(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId')
    //const history = useHistory();

    async function handleNewCase(e){
        e.preventDefaut()

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
        }
        catch (err){
            alert('Erro ao cadastrar, tente novamente');
        }

    };

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
                <form onSubmit={handleNewCase}>
                    <input 
                        placeholder="Título do Caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
};

export default NewCase;