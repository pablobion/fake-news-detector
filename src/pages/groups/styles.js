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
            animation: Opacityfade 2s forwards;
            animation-delay: 1s;

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
`;
