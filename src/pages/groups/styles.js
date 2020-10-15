import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    text-align: center;

    .description {
        padding: 20px;
        color: #454545;
    }

    #groupimage {
        position: relative;
        animation: myfirst 2s forwards;

        @keyframes myfirst {
            from {
                top: 0px;
            }
            to {
                top: 180px;
            }
        }

        img {
            width: 300px;
            @media (min-width: 700px) {
                width: 600px;
            }
        }
        #text-bottom-button {
            color: #454545;
            font-size: 30px;
        }
    }

    .divbutton {
        display: flex;
        justify-content: center;
        align-items: center;

        #create-group-button {
            position: absolute;
            background: #00b0ff;
            color: white;
            border: none;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            &:hover {
                background: ${shade(0.1, "#00B0FF")};
            }
            opacity: 0;
            animation: Opacityfade 1s forwards;
            animation-delay: 1.3s;

            @keyframes Opacityfade {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            .icon {
                font-size: 30px;
            }
        }
    }

    #create-group {
        color: #454545;
        width: 100vw;
        #title-create-group {
            font-size: 30px;
        }

        #div-form-create-group {
            display: flex;
            align-items: center;
            flex-direction: column;
            #div-group-name {
                display: flex;
                align-items: center;
                border: 1px solid #00b0ff;
                border-radius: 6px 6px 6px 6px;
                margin-top: 20px;
                p {
                    font-size: 18px;
                    background-color: #00b0ff;
                    padding: 10px;
                    border-radius: 5px 0px 0px 5px;
                    color: white;
                }
                input {
                    margin-left: 10px;
                    width: 200px;
                    height: 30px;
                    border: none;
                    font-size: 18px;
                    padding-right: 5px;
                }
            }

            #div-description-group {
                margin-top: 30px;
                border: 1px solid #00b0ff;

                border-radius: 10px 10px 10px 10px;
                p {
                    font-size: 18px;
                    border-radius: 8px 8px 0px 0px;
                    background-color: #00b0ff;
                    padding: 10px;
                    color: white;
                }

                textarea {
                    border: none;
                    resize: none;
                    width: 355px;
                    height: 150px;
                    padding: 10px;
                    background: rgba(255, 255, 255, 0.1); /* deixa o fundo branco transparente */
                    backdrop-filter: blur(1px);
                    cursor: text;
                }

                textarea::-webkit-scrollbar {
                    width: 12px;
                    background-color: #f5f5f5;
                }

                textarea::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
                    background-color: #4285f4;
                }
            }

            #div-list-emails {
                margin-top: 30px;
                #div-list-emails-inside {
                    border: 1px solid lightgray;
                    border-style: none solid solid solid;
                    border-radius: 10px;

                    div {
                        display: flex;
                        align-items: flex-start;
                    }

                    input {
                        font-size: 17px;
                        padding: 10px;
                        border: 1px solid #00b0ff;
                        border-radius: 10px 0px 0px 10px;
                    }
                    button {
                        font-size: 18px;
                        padding: 10px;
                        border: none;
                        color: white;
                        background-color: #00b0ff;
                        border-radius: 0px 8px 8px 0px;
                        &:hover {
                            background: ${shade(0.1, "#00B0FF")};
                        }
                    }

                    ul {
                        list-style-type: none;
                        font-size: 14px;
                        margin-bottom: 5px;

                        li {
                            padding: 5px;
                            border-bottom: 1px solid lightgray;
                            border-top: 1px solid lightgray;
                        }
                        li:first-child {
                            border-top: none;
                            margin-top: 2px;
                        }
                        li:last-child {
                            border-bottom: none;
                        }
                    }
                }
            }
        }
    }
`;
