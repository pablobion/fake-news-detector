import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/index";
import { useHistory } from "react-router-dom";

import { RiLockPasswordLine } from "react-icons/ri";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

import { Container, ViewNews } from "./styles";

const Profile = () => {
    const history = useHistory();

    const [showChangePass, setShowChangePass] = useState(false);
    const [mode, setMode] = useState("profile");

    const handleShowChangePass = () => {
        showChangePass === true ? setShowChangePass(false) : setShowChangePass(true);
    };

    const handleChangeMode = () => {
        setShowChangePass(false);
        mode === "profile" ? setMode("viewNews") : setMode("profile");
    };

    const getProfileData = async () => {
        const user = localStorage.getItem('user');
        const authorization = localStorage.getItem('qwert');
        const settings = {
            method: "GET", 
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": authorization
            },
        };
        try {
            const response = await fetch(`https://tcspedroverani.herokuapp.com/user/history?user=${user}`, settings);
            const data = await response.json();
            return data; 
        } catch (error) {
            
        }
       
    }

    useEffect(() => {
        (async () => {
            const data = await getProfileData();
            //aqui tem os dados do profile do cara, função não existe ainda no backend
          
            
        })();
    }, []);

    return (
        <>
            <Menu />
            <Container>
                <div id="profile-container">
                    {mode === "profile" && (
                        <div id="nav">
                            <button id="voltar" style={{ marginLeft: 5 }}>
                                <BiLeftArrowAlt
                                    id="left-arrow"
                                    onClick={() => {
                                        history.goBack();
                                    }}
                                />
                            </button>
                            <p>Perfil</p>
                            <RiLockPasswordLine id="change-password" onClick={handleShowChangePass} />
                        </div>
                    )}
                    {mode === "viewNews" && (
                        <div id="nav">
                            <button id="voltar">
                                <BiLeftArrowAlt id="left-arrow" onClick={handleChangeMode} />
                            </button>
                            <p>Historico da noticia</p>
                            <div id="blank-space-changepass" />
                        </div>
                    )}

                    {showChangePass && (
                        <>
                            <div id="title-change-password">
                                <h2>Troque sua senha</h2>
                            </div>

                            <div id="div-change-password">
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
                    {mode === "profile" && (
                        <>
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

                                <button id="news" onClick={handleChangeMode}>
                                    <div id="news-image">
                                        <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                                    </div>
                                    <p>qwerrtyuiopasdfghjklzxcvbnmmmmqwertyuiopasdfghjkl</p>
                                </button>
                                <button id="news" onClick={handleChangeMode}>
                                    <div id="news-image">
                                        <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                                    </div>
                                    <p>qwerrtyuiopasdfghjklzxcvbnmmmmqwertyuiopasdfghjkl</p>
                                </button>
                                <button id="news" onClick={handleChangeMode}>
                                    <div id="news-image">
                                        <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                                    </div>
                                    <p>qwerrtyuiopasdfghjklzxcvbnmmmmqwertyuiopasdfghjkl</p>
                                </button>
                                <button id="news" onClick={handleChangeMode}>
                                    <div id="news-image">
                                        <img src="https://s2.googleusercontent.com/s2/favicons?domain=https://g1.globo.com/" alt="" />
                                    </div>
                                    <p>qwerrtyuiopasdfghjklzxcvbnmmmmqwertyuiopasdfghjkl</p>
                                </button>
                            </div>
                        </>
                    )}
                    {mode === "viewNews" && (
                        <>
                            <ViewNews>
                                <h1>Essa é uma noticia verdadeira.</h1>
                                <div id="acess-time">
                                    <AiOutlineFieldTime id="acess-time-icon" />
                                    <span>Acessada em: 19/10/2020</span>
                                </div>

                                <div id="news-content">
                                    <p id="text">
                                        <ImQuotesLeft id="quote-left" />O Jornal Nacional teve acesso a gravações e mensagens dos investigados no inquérito da
                                        Polícia Federal sobre fraudes na compra de respiradores no Amazonas. Em abril, o sistema de saúde do Amazonas entrou em
                                        colapso por causa da pandemia da Covid. Foi nesse cenário que, segundo a Polícia Federal, integrantes da cúpula do
                                        governo do Amazonas e empresários montaram um esquema de corrupção que comprou 28 respiradores da loja de vinhos FJAP,
                                        sem licitação, por quase R$ 3 milhões. A Polícia Federal diz que houve uma triangulação. O governo do estado encomendou
                                        os respiradores da loja de vinhos, que, por sua vez, segundo a PF, comprou da Sonoar, que comercializa os equipamentos.
                                        A FJAP repassou então para o governo do Amazonas com superfaturamento de 133%. Segundo a Procuradoria-Geral da
                                        República, o governador Wilson Lima, do PSC, é suspeito de ser o chefe do esquema. Ele foi alvo de busca e apreensão na
                                        primeira fase da Operação Sangria, em junho, e teve parte dos bens bloqueados pela Justiça. Na semana passada, a PF
                                        prendeu cinco suspeitos de envolvimento na fraude. Entre eles, o ex-secretário de Saúde do Amazonas Rodrigo Tobias. Os
                                        cinco foram soltos no domingo (18), porque venceu o prazo da prisão temporária.
                                        <ImQuotesRight id="quote-right" />
                                    </p>
                                </div>
                            </ViewNews>
                        </>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Profile;
