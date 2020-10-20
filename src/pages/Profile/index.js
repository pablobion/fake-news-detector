import React, { useState } from "react";
import Menu from "../../components/menu/index";
import { useHistory } from "react-router-dom";

import { RiLockPasswordLine } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";

import { Container } from "./styles";

const Profile = () => {
    const history = useHistory();

    const [mode, setMode] = useState(false);

    const changemode = () => {
        if (mode === false) {
            setMode(true);
        }
        if (mode === true) {
            setMode(false);
        }
    };

    return (
        <>
            <Menu />
            <Container>
                <div id="profile-container">
                    <div id="nav">
                        <button id="voltar">
                            <BiLeftArrowAlt
                                id="left-arrow"
                                onClick={() => {
                                    history.goBack();
                                }}
                            />
                        </button>
                        <p>Perfil</p>
                        <RiLockPasswordLine id="change-password" onClick={changemode} />
                    </div>
                    {mode && (
                        <>
                            <div id="div-change-password">
                                <h2 id="title-change-password">Troque sua senha</h2>
                                <div>
                                    <p>Senha atual</p>
                                    <input />
                                </div>
                                <div>
                                    <p>Nova Senha</p>
                                    <input />
                                </div>
                                <div>
                                    <p>Repita sua senha</p>
                                    <input />
                                </div>

                                <div>
                                    <button>Alterar</button>
                                </div>
                            </div>
                        </>
                    )}
                    <div id="person">
                        <img id="image-profile" src="https://avatars.dicebear.com/api/initials/Pedro.verani@hotmail.com.svg" alt="" />
                        <p>Pedro.verani@hotmail.com</p>
                    </div>
                    <div id="infos">
                        <p>8</p>
                        <small>Noticias Detectadas</small>
                    </div>
                    <div id="content">
                        <h2>Historico</h2>
                        <div id="news">
                            <div id="news-image">
                                <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                            </div>
                            <p>qwerrtyuiopasdfghjklzxcvbnmmmmqwertyuiopasdfghjkl</p>
                        </div>
                        <div id="news">
                            <div id="news-image">
                                <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                            </div>
                        </div>
                        <div id="news">
                            <div id="news-image">
                                <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                            </div>
                        </div>

                        {/* <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://exitoina.uol.com.br/noticias/" alt="" />
                        <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://jovempan.com.br/" alt="" />
                        <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://www.uol.com.br/" alt="" /> */}
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Profile;
