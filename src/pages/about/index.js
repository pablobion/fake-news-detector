import React from "react";

import { Container } from "./styles";

import Menu from "../../components/menu";

const About = () => {
    return (
        <>
            <Menu />
            <Container>
                <h1>Somos uma plataforma que lhe ajuda a identificar noticias falsas.</h1>
            </Container>
        </>
    );
};

export default About;
