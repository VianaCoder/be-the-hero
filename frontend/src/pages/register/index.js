import React, { useState } from 'react';
import api from '../../services/api'

import './style.css'

import logoImg from  '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';

function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();
        console.log('consalado')

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID é: ${response.data.id}`);
            history.push('/')
        } 
        catch (err) {
            alert("Houve uma falha, tente novamente!");
        }

    }


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
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)} />
                    <input
                        type="email" 
                        placeholder="E-Mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}/>

                    <section className="cidade_url">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)} />
                        <input 
                            placeholder="UF"
                            value={uf}
                            style={{width: 80}}
                            onChange={e => setUf(e.target.value)}/>
                    </section>
                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
    )
};

export default Register;