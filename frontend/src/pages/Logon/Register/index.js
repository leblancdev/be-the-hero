import React, { useState } from 'react';
import logoImg from "../../../assets/logo.svg"
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import api from '../../../services/api.js'



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const histoy = useHistory();
    
    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
        try {
            const response = await api.post('ongs', data);
            alert(`Cadastro finalizado, seu ID de acesso é ${response.data.id}`);
            histoy.push('/');
        } catch (err) {
            alert('Erro ao realizar cadastro, tente novamente');
        }
    }
    return (
        <div className="regsiter-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="be the hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encotrarem os cassos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o Logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        values={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="E-mail" type="email"
                        values={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        values={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input placeholder="Cidade"
                            values={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input
                            placeholder="UF" style={{ width: 80 }}
                            values={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}