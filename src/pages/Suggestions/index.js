import React, { useState } from "react";
import Menu from "../../components/menu/";
import { Container } from "./styles";
import { useAlert, types } from "react-alert";

import { useHistory } from "react-router-dom";

const Suggestions = () => {
    const alert = useAlert();
    const history = useHistory();
    const [content, setContent] = useState("");

    const handleChange = (evt) => {
        const event = evt.target.value;
        setContent(event);
    };

    const sendSuggestion = async () => {
        const user = localStorage.getItem("user");
        const authorization = localStorage.getItem("qwert");

        const settings = {
            method: "POST",
            body: JSON.stringify({ user, content }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };

        try {
            const response = await fetch("https://cors-anywhere.herokuapp.com/tcspedroverani.herokuapp.com/suggestion/suggest", settings);
            const data = await response.json();
            if (data.success) {
                alert.show("Sugestão enviada com sucesso.", { type: types.SUCCESS });
                setContent("");
            }
        } catch (error) {
            //houve um erro ao realizar a sugestão, tente novamente mais tarde
        }
    };

    return (
        <>
            <Menu />
            <Container>
                <h1>Sugestão</h1>
                <p id="title">Digite aqui uma noticia que você desja sugerir para aprimorarmos a nossa inteligencia artificial. Encaminhando o texto e tipo.</p>
                <textarea value={content} onChange={handleChange} />
                <div>
                    <select id="input-select">
                        <option value="" disabled selected hidden>
                            Selecione o tipo de noticia
                        </option>
                        <option value="true">Verdadeira</option>
                        <option value="false">Falsa</option>
                    </select>
                    <button type="submit" onClick={sendSuggestion}>
                        Enviar
                    </button>
                </div>
            </Container>
        </>
    );
};

export default Suggestions;
