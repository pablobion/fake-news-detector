import React from "react";
import Menu from "../../components/menu/";
import { Container } from "./styles";

const Suggestions = () => {
    return (
        <>
            <Menu />
            <Container>
                <h1>Sugestão</h1>
                <p id="title">Digite aqui uma noticia que você desja sugerir para aprimorarmos a nossa inteligencia artificial. Encaminhando o texto e tipo.</p>
                <textarea />
                <div>
                    <select id="input-select">
                        <option value="" disabled selected hidden>
                            Selecione o tipo de noticia
                        </option>
                        <option value="true">Verdadeira</option>
                        <option value="false">Falsa</option>
                    </select>
                    <button type="submit">Enviar</button>
                </div>
            </Container>
        </>
    );
};

export default Suggestions;
