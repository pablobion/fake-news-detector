import React from "react";

import { Container } from "./styles";

import Menu from "../../components/menu/";
import Animation from "./animations/animation";

const Page404 = () => {
    return (
        <>
            <Menu />
            <Container>
                <h1>Desculpe mas essa pagina não existe :(</h1>
                <div className="animation">
                    <Animation />
                </div>
                <button className="voltar">Voltar</button>
            </Container>
        </>
    );
};

export default Page404;
