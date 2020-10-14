import React from "react";

import { Container } from "./styles";

/* Components */
import Menu from "../../components/menu";

/* Icons */
import GroupImg from "../../assets/grouppageart.svg";

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
        //continuar metodo dps, lidar com a criacao, exibir os dados do grupo criado
        //ao criar grupo, já irá convidar todo mundo que o cara adicioncou
        //tem que ver o quão custoso é deixar o grupo editável.
    };
    return (
        <>
            <Menu />
            <Container>
                <h1 className="description">Crie um grupo reuna seus amigos e familiares e mantenha todos informados sobre as fake news</h1>

                <div className="divbutton">
                    <button id="create-group-button">
                        <FaPlus className="icon" />
                    </button>
                    <div id="groupimage">
                        <img src={GroupImg} alt="" />
                        <h1 id="text-bottom-button">Crie agora mesmo</h1>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Groups;
