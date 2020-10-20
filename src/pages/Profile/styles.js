import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    color: #343434;
    display: flex;
    margin-top: 80px;
    @media (min-width: 700px) {
        justify-content: center;
    }

    #profile-container {
        width: 70vw;
        width: 100%;
        #nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 40px;
            @media (min-width: 700px) {
                padding: 0px 50px 0px 50px;
            }

            padding-right: 10px;

            #left-arrow {
                font-size: 60px;
            }
            button {
                background: transparent;
                border: none;
            }
            #change-password {
                cursor: pointer;
            }
        }

        #div-change-password {
            display: flex;

            h2 {
                font-size: 20px;
                margin-right: 10px;
                margin-top: 15px;
                @media (max-width: 700px) {
                    margin-bottom: 15px;
                }
            }

            @media (max-width: 1000px) {
                flex-direction: column;
            }
            justify-content: center;
            align-items: center;
            padding: 10px 0px 10px 0px;
            border-bottom: 1px dashed lightgray;
            border-top: 1px dashed lightgray;

            @media (min-width: 700px) {
                animation: grow1 1s forwards;
                @keyframes grow1 {
                    from {
                        height: 0%;
                        opacity: 0;
                    }
                    to {
                        height: 15%;
                        opacity: 1;
                    }
                }
            }

            @media (max-width: 1000px) {
                animation: grow2 1s forwards;
                @keyframes grow2 {
                    from {
                        height: 30%;
                    }
                    to {
                        height: 40%;
                    }
                }
            }
            div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                p {
                    font-size: 18px;
                    @media (min-width: 700px) {
                        font-size: 18px;
                    }
                    @media (min-width: 700px) {
                        margin-right: 20px;
                    }
                }

                input {
                    width: 60vw;
                    @media (min-width: 700px) {
                        width: 230px;
                    }

                    height: 35px;
                    border: 1px solid lightgray;
                    border-radius: 5px;
                    margin: 10px 0px;
                    font-size: 16px;
                    padding: 0px 20px;
                    @media (min-width: 700px) {
                        margin-right: 20px;
                    }
                }
                button {
                    background: #00b0ff;
                    border-radius: 1.2vh;
                    border: 0;
                    color: #fff;
                    font-weight: bold;
                    transition: background-color 0.2s;
                    &:hover {
                        background: ${shade(0.2, "#00B0FF")};
                    }
                    @media (max-width: 700px) {
                        margin-top: 10px;
                    }

                    height: 50px;
                    font-size: 18px;
                    width: 130px;
                    @media (min-width: 700px) {
                        margin-top: 10px;
                        margin-right: 10px;
                    }
                }
            }
        }

        #person {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            margin-left: 40px;
            @media (min-width: 700px) {
                margin-left: 150px;
            }

            margin-top: 50px;
            img {
                width: 50px;
                @media (min-width: 700px) {
                    width: 100px;
                }

                border-radius: 50%;
            }

            p {
                font-size: 5vw;
                margin-left: 10px;
                @media (min-width: 700px) {
                    font-size: 30px;
                    margin-left: 40px;
                }
            }
        }

        #infos {
            width: 200px;
            display: flex;
            flex-direction: column;

            margin-left: 40px;
            @media (min-width: 700px) {
                margin-left: 150px;
            }
            margin-top: 30px;

            p {
                font-size: 36px;
            }
            small {
                font-size: 18px;
            }
        }

        #content {
            display: flex;
            flex-direction: column;
            padding: 40px 20px 0px 0px;
            margin-left: 40px;
            @media (min-width: 700px) {
                margin-left: 150px;
            }

            h2 {
                font-size: 24px;
                margin-bottom: 10px;
                color: #454545;
            }
            #news {
                border: 1px solid lightgray;
                border-radius: 0.8vh;
                padding: 10px;
                margin-bottom: 10px;
                display: flex;
                align-items: center;
                background-color: white;
                width: 80vw;

                @media (min-width: 700px) {
                    width: 50vw;
                }
                cursor: pointer;

                transition: transform 1s;

                &:hover {
                    transform: scale(1.02);
                }

                #news-image {
                    padding: 10px;
                    border: 1px solid gray;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-right: 10px;

                    img {
                        width: 20px;
                    }
                }

                p {
                    font-size: 14px;
                    white-space: nowrap;
                    color: #575757;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`;
