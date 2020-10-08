import React, { useReducer } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

import { LoginArea, LinkCreateAccount } from './styles.js'

import { useForm } from 'react-hook-form'

function SwitchPages(props) {

        const { register, handleSubmit } = useForm()

        const handleChange = evt => {
                const name = evt.target.name;
                const newValue = evt.target.value;
                setUserInput({ [name]: newValue });
        }

        const [userInput, setUserInput] = useReducer(
                (state, newState) => ({ ...state, ...newState }),
                {
                        userName: '',
                        userPassword: '',
                }
        );

        const loginPage = async data => {
                const settings = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}
		try {
			const response = await fetch('http://tcspedroverani.herokuapp.com/user/login', settings);
			const data = await response.json();
			if (data.success) {
			        window.location.href = '/detector';
			}

		} catch (error) {
			alert('Erro ao fazer login');
		}
        }

        return (
                <>
                        <LinkCreateAccount>
                                <Link to="/createaccount" style={{ textDecoration: 'none' }}><span>Crie sua conta</span></Link>
                        </LinkCreateAccount>
                        <LoginArea>
                                <form onSubmit={handleSubmit(loginPage)}>
                                        <div>
                                                <span>E-mail</span>
                                                <input name='userName' value={userInput.userName} onChange={handleChange} ref={register({ required: true })} />
                                        </div>
                                        <div>
                                                <span>Senha</span>
                                                <input name='userPassword' value={userInput.userPassword} onChange={handleChange} ref={register({ required: true })} />
                                                <Link to="/lostaccount" style={{ textDecoration: 'none' }}><small className='lostaccount'>Esqueceu sua senha?</small></Link>
                                        </div>
                                        <button type='submit'>Entrar</button>

                                </form>
                        </LoginArea>
                </>
        )
}

export default SwitchPages;