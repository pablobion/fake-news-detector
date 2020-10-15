import React, { useReducer, useEffect } from "react";

import { Container } from "./styles";

/* Components */
import Menu from "../../components/menu";

/* Icons */
import GroupImg from "../../assets/grouppageart.svg";
import LeftArrow from "../../assets/left-arrow.svg";

import { FaPlus } from "react-icons/fa";

const Groups = () => {
    const getGroup = async () => {
        const authorization = localStorage.getItem("qwert");
        const user = localStorage.getItem("user");

        const settings = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };

        try {
            const response = await fetch(`https://tcspedroverani.herokuapp.com/group/view?=user${user}`, settings);
            const data = response.json();

            //Isso tem que ser executado assim que o usuário abrir a página de groups, se não vir nada é pq ele não ta em nenhum grupo.
            //Vai retornar dados do grupo, fazer um campo pro nome do grupo, descricao, participantes, e um botão pra sair do grupo.
            //Caso o usuário não tenha grupo, exibir um botão para ele criar um grupo.
            //Fazer uma breve descrição superior sobre o que é o grupo,(eu faço a descrição, só reserva o espaço);
        } catch (error) {}
    };

    const createGroup = async (groupData) => {
        const authorization = localStorage.getItem("qwert");
        const user = localStorage.getItem("user");
        //pra criar grupo preciso dos dados
        //groupDescription = descricao do grupo ; groupName = nome do grupo;
        // groupParticipantsInvited = os emails separados por virgula que o cara quer convidar
        // createdBy = user do localStorage
        const payload = {
            createdBy: user,
            ...groupData,
        };
        const settings = {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };
        try {
            const response = await fetch("https://tcspedroverani.herokuapp.com/group/create", settings);
            const data = await response.json();
        } catch (error) {}

        //continuar metodo dps, lidar com a criacao, exibir os dados do grupo criado
        //ao criar grupo, já irá convidar todo mundo que o cara adicioncou
        //tem que ver o quão custoso é deixar o grupo editável.
    };

    useEffect(() => {
        getGroup();
    }, []);

    const [userInput, setUserInput] = useReducer(
        //States da pagina
        (state, newState) => ({ ...state, ...newState }),
        {
            content: "",
            mode: "create",
        }
    );

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const changeMode = (mode) => {
        setUserInput({ ["mode"]: mode });
    };

    return (
        <>
            <Menu />

            <Container>
                {userInput.mode === "nogroup" && (
                    <>
                        <h1 className="description">Crie um grupo reuna seus amigos e familiares e mantenha todos informados sobre as fake news</h1>

                        <div className="divbutton">
                            <button id="create-group-button" onClick={() => changeMode("create")}>
                                <FaPlus className="icon" />
                            </button>
                            <div id="groupimage">
                                <img src={GroupImg} alt="" />
                                <h1 id="text-bottom-button">Crie agora mesmo</h1>
                            </div>
                        </div>
                    </>
                )}
                {userInput.mode === "create" && (
                    <>
                        <div id="back" onClick={() => changeMode("nogroup")}>
                            <img src={LeftArrow} alt="" />
                            <p>Voltar</p>
                        </div>
                        <h1 id="title-create-group">Crie seu grupo</h1>
                        <div id="create-group">
                            <div id="div-form-create-group">
                                <div id="div-group-name">
                                    <p>Nome do grupo</p>
                                    <input></input>
                                </div>
                                <div id="div-description-group">
                                    <p>Descrição do grupo</p>
                                    <textarea id="description-group" />
                                </div>
                            </div>
                            <div id="div-list-emails">
                                <h2>Adicione e-mails a lista do grupo</h2>
                                <div id="div-list-emails-inside">
                                    <div>
                                        <input type="email" id="input-email" />
                                        <button id="button-add-email">
                                            <FaPlus />
                                        </button>
                                    </div>
                                    <ul>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                        <li>pablo.bion@hotmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Container>
        </>
    );
};

export default Groups;
