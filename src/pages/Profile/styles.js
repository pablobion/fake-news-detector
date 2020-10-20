import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    color: #343434;
    display: flex;
    margin-top: 30px;
    @media (min-width: 700px) {
        justify-content: center;
    }

    #profile-container {
        width: 70vw;
        width: 100%;
        @media (min-width: 700px) {
            justify-content: center;
            width: 80vw;
            align-items: center;
        }
        #nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 36px;

            #left-arrow {
                color: #454545;
                font-size: 60px;
            }
            button {
                background: transparent;
                border: none;
            }
            #change-password {
                color: #454545;
                cursor: pointer;
            }

            #blank-space-changepass {
                width: 38px;
            }
        }
        #title-change-password {
            border-top: 1px dashed lightgray;
            display: flex;
            justify-content: center;

            h2 {
                margin-top: 10px;
                font-size: 20px;
                margin-right: 10px;

                @media (max-width: 700px) {
                    margin-bottom: 15px;
                }
            }

            animation: invi1 1s forwards;
            @keyframes invi1 {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        }

        #div-change-password {
            display: flex;

            @media (max-width: 1000px) {
                flex-direction: column;
            }
            justify-content: center;
            align-items: center;
            padding: 10px 0px 10px 0px;
            border-bottom: 1px dashed lightgray;

            @media (min-width: 700px) {
                animation: grow1 1s forwards;
                @keyframes grow1 {
                    from {
                        height: 0%;
                        opacity: 0;
                    }
                    to {
                        height: 20%;
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
                    width: 90px;
                }

                border-radius: 50%;
            }

            p {
                font-size: 5vw;
                margin-left: 10px;
                @media (min-width: 700px) {
                    font-size: calc(18px + 6 * ((100vw - 320px) / 680));
                    margin-left: 20px;
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
                    border: 2px solid lightgray;
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

export const ViewNews = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;

    h1 {
        font-size: 28px;
    }
    #acess-time {
        #acess-time-icon {
            font-size: 20px;
            margin-right: 10px;
        }
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 14px;
        }
    }

    #news-content {
        margin-top: 40px;
        display: flex;
        width: 50vw;
        @media (max-width: 700px) {
            width: 75vw;
        }
        line-height: 1.5;
        font-size: 16px;
        text-align: justify;
        text-align-last: justify;

        #quote-left {
            margin-right: 20px;
        }

        #quote-right {
            margin-left: 20px;
        }
    }
`;
