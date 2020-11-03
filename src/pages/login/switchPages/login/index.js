import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";

import { LoginArea, LinkCreateAccount } from "./styles.js";

import { useForm } from "react-hook-form";

function SwitchPages(props) {
    const { register, handleSubmit } = useForm();

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        userName: "",
        userPassword: "",
    });

    const loginPage = async (data) => {
        const settings = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/user/login", settings);
            const dataReturned = await response.json();
            if (dataReturned.error === "A senha está incorreta" || dataReturned.error === "Usuário não encontrado") {
                alert("E-mail ou senha está incorreta");
            }
            if (dataReturned.success) {
                window.localStorage.setItem("qwert", dataReturned.token);
                window.localStorage.setItem("user", data.userName);
                window.location.href = "/detector";
            }
        } catch (error) {
            alert("Erro ao fazer login");
        }
    };

    useEffect(() => {
        (async () => {
            try {
            // const response = await fetch('https://tcspedroverani.herokuapp.com/report/extract');
            // const data = await response.json();

            } catch (error) {
                
            }
            //isso é a função pra pegar os dados que vão ser exibidos quando o usuário NÃO estiver logado
            //Já enviamos X notícias, e já enviamos mais de X emails avisando colegas.
            //função não existe ainda no backend
            //não sei se vai exatamente nesse arquivo, porque no criação de conta e recuperação de senha também vai exibir,
            //n sei se teria que fazer 1 useEffect em cada arquivo.
           
        })();
    }, []);

    
    

    return (
        <>
            <LinkCreateAccount>
                <Link to="/createaccount" style={{ textDecoration: "none" }}>
                    <span>Crie sua conta</span>
                </Link>
            </LinkCreateAccount>
            <LoginArea>
                <form onSubmit={handleSubmit(loginPage)}>
                    <div>
                        <span>E-mail</span>
                        <input name="userName" value={userInput.userName} onChange={handleChange} ref={register({ required: true })} />
                    </div>
                    <div>
                        <span>Senha</span>
                        <input type="password" name="userPassword" value={userInput.userPassword} onChange={handleChange} ref={register({ required: true })} />
                        <Link to="/lostaccount" style={{ textDecoration: "none" }}>
                            <small className="lostaccount">Esqueceu sua senha?</small>
                        </Link>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </LoginArea>
        </>
    );
}

export default SwitchPages;
