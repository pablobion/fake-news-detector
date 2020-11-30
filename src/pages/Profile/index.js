import React, { useState, useEffect, useReducer } from "react";
import Menu from "../../components/menu/index";
import { useHistory } from "react-router-dom";

import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";

import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineFieldTime, AiOutlineSetting } from "react-icons/ai";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { MdClose } from "react-icons/md";

import { Container, ViewNews } from "./styles";

const Profile = () => {
    const alert = useAlert();
    const history = useHistory();

    const [showSettings, setshowSettings] = useState(false);
    const [mode, setMode] = useState("profile");

    const [email, setEmail] = useState("");
    const [historicNews, setHistoricNews] = useState([]);

    const { register, handleSubmit } = useForm();

    const handleChange = (evt) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        setUserInput({ [name]: newValue });
    };

    const [userInput, setUserInput] = useReducer((state, newState) => ({ ...state, ...newState }), {
        oldPassword: "",
        newPassword: "",
        newPasswordAgain: "",
    });

    const handleshowSettings = () => {
        showSettings === true ? setshowSettings(false) : setshowSettings(true);
    };

    const handleChangeMode = () => {
        setshowSettings(false);
        mode === "profile" ? setMode("viewNews") : setMode("profile");
    };

    const getProfileData = async () => {
        const user = localStorage.getItem("user");
        const authorization = localStorage.getItem("qwert");
        const settings = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
        };
        try {
            const response = await fetch(`https://tcspedroverani.herokuapp.com/user/history?user=${user}`, settings);
            const data = await response.json();
            return data;
        } catch (error) {}
    };

    const changePassword = async (e, oldPassword, newPassword, newPasswordAgain) => {
        e.preventDefault();
        const user = localStorage.getItem("user");
        if (newPassword !== newPasswordAgain) {
            //As senhas não conferem
            alert.show("As senhas não conferem");
        }
        const authorization = localStorage.getItem("qwert");
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify({ oldPassword, newPassword, email: user }),
        };
        try {
            const response = await fetch(`https://tcspedroverani.herokuapp.com/user/changePassword`, settings);
            const data = await response.json();
            if (data.success) {
                alert("senha trocada com sucesso");
            } else {
                //
                alert("houve um erro, printa o erro em data.error");
            }
            console.log("senha alterada");
        } catch (error) {}
    };

    const cleanUserHistory = async () => {
        const authorization = localStorage.getItem("qwert");
        const user = localStorage.getItem("user");

        const settings = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify({ user }),
        };

        try {
            const response = await fetch("https://tcspedroverani.com.herokuapp.com/user/clean", settings);
            const data = await response.json();
            if (data.success) {
                console.log("Histórico limpo com sucesso");
                alert.show("Histórico limpo com sucesso");
                window.location.reload(true);
            }
        } catch (error) {}
    };

    useEffect(() => {
        (async () => {
            const data = await getProfileData();
            console.log(data);
            setHistoricNews(data.news);
        })();

        setEmail(localStorage.getItem("user"));
    }, []);

    function overlay() {
        let el = document.getElementById("overlay");
        el.style.visibility = el.style.visibility == "visible" ? "hidden" : "visible";
    }
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
                            <AiOutlineSetting id="change-password" onClick={handleshowSettings} />
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

                    {showSettings && (
                        <>
                            <div id="title-change-password">
                                <h2>Troque sua senha</h2>
                            </div>

                            <form
                                id="div-change-settings"
                                onSubmit={(e) => handleSubmit(changePassword(e, userInput.oldPassword, userInput.newPassword, userInput.newPasswordAgain))}
                            >
                                <div>
                                    <p>Senha atual</p>
                                    <input name="oldPassword" value={userInput.oldPassword} onChange={handleChange} ref={register({ required: true })} />
                                </div>
                                <div>
                                    <p>Nova Senha</p>
                                    <input name="newPassword" value={userInput.newPassword} onChange={handleChange} ref={register({ required: true })} />
                                </div>
                                <div>
                                    <p>Repita a nova senha</p>
                                    <input
                                        name="newPasswordAgain"
                                        value={userInput.newPasswordAgain}
                                        onChange={handleChange}
                                        ref={register({ required: true })}
                                    />
                                </div>

                                <div>
                                    <button>Alterar</button>
                                </div>
                            </form>
                            <div id="div-footer-settings">
                                <div id="button-clean-historic">
                                    <button onClick={() => cleanUserHistory()}>Limpar Histórico</button>
                                </div>
                                <div id="button-delete-account">
                                    <button onClick={() => overlay()}>Deletar conta</button>
                                </div>

                                <div id="overlay">
                                    <div id="close-overlay">
                                        <button onClick={() => overlay()}>
                                            <MdClose style={{ cursor: "pointer" }} />
                                        </button>
                                    </div>
                                    <div id="confirm-delete">
                                        <h3>Você realmente deseja deletar sua conta?</h3>
                                        <button>
                                            <h4>Sim, desejo deletar minha conta</h4>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {mode === "profile" && (
                        <>
                            <div id="person">
                                <img id="image-profile" src={`https://avatars.dicebear.com/api/initials/${email}.svg`} alt="" />
                                <p>{email}</p>
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

                                {/* {historicNews ? (
                                    historicNews.map((elem) => (
                                        <div>
                                            <span>ss</span>
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )} */}
                                {historicNews.map((elem) => (
                                    <h1>as</h1>
                                ))}
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
