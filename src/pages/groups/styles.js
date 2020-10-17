import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    justify-content: flex-start;
    text-align: center;

    #back {
        display: flex;
        align-items: center;
        @media (max-width: 700px) {
            margin-left: 20px;
        }
        @media (min-width: 700px) {
            margin-left: 20vw;
        }

        height: 50px;

        cursor: pointer;
        p {
            font-size: 18px;
            margin-left: 10px;
        }
        img {
            height: 50px;
        }
    }

    .description {
        padding: 20px;
        color: #454545;
    }

    #groupimage {
        position: relative;
        animation: myfirst 2s forwards;
        z-index: -1;

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

    #title-create-group {
        font-size: 30px;
        margin-bottom: 30px;
    }

    #footer {
        @media (min-width: 700px) {
            margin-bottom: 20px;
        }
        button {
            background:  #009b00;
            border-radius: 1.2vh;
            border: 0;
            color: #FFF;
            font-weight: bold;
            transition: background-color 0.2s;
            cursor: pointer;
            &:hover {
                background: ${shade(0.2, "#009b00")}
            } 
                height: 50px;
                font-size: 20px;
            width: 150px;
                }
        }
    }

    #create-group {
        color: #454545;
        width: 100vw;
        display: flex;
        justify-content: center;
        @media (max-width: 700px) {
            flex-direction: column;
            align-items: center;
        }

        #div-form-create-group {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin: 0px 5px 0px 5px;

            @media (min-width: 700px) {
                padding-right: 30px;
            }
            #div-group-name {
                display: flex;
                align-items: center;
                border: 1px solid #00b0ff;
                border-radius: 6px 6px 6px 6px;
                margin-top: 20px;

                p {
                    @media (min-width: 700px) {
                        font-size: 18px;
                    }
                    font-size: 14px;
                    background-color: #00b0ff;
                    padding: 10px;
                    border-radius: 5px 0px 0px 5px;
                    color: white;
                }
                input {
                    margin-left: 10px;
                    width: 50vw;
                    @media (min-width: 700px) {
                        width: 200px;
                    }
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
                    font-size: 14px;
                    @media (min-width: 700px) {
                        font-size: 18px;
                    }
                    border-radius: 8px 8px 0px 0px;
                    background-color: #00b0ff;
                    padding: 10px;
                    color: white;
                }

                textarea {
                    border: none;
                    resize: none;
                    @media (min-width: 700px) {
                        width: 355px;
                    }
                    width: 88vw;

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
        }

        #div-list-emails {
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @media (min-width: 700px) {
                margin-left: 30px;
            }
            @media (max-width: 700px) {
                width: 88vw;
            }
                    

            @media (max-width: 700px) {
                margin-top: 25px;
            }

            #div-list-emails-inside {
                border-radius: 10px;

                div {
                    display: flex;
                    align-items: flex-start;
                }

                input {
                    font-size: 17.5px;
                    padding: 10px;
                    border: 1px solid #00b0ff;
                    border-radius: 10px 0px 0px 10px;
                    @media (max-width: 700px) {
                        width: 60vw;
                        max-width: 300px;
                    }
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
                    height: 225px;

                    li {
                        padding: 5px;
                        border: 1px solid lightgray;
                        border-radius: 10px;
                        margin-top: 10px;
                    }

                    li:last-child {
                        margin-bottom: 30px;
                    }
                }
            }
        }
    }





    #container-created{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        color: #454545;
        font-size: 20px;
        @media (max-width: 700px) {
                flex-direction: column;
        }
        
        #border-color{
            border: 1px solid;
        }
       
       
        #card-created{

            display: flex;

            border: 1px solid lightgrey;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23);
            border-radius: 1vh;
            min-height: 200px;

            width: 700px;

            @media (max-width: 700px) {
                flex-direction: column;
                width: 70vw;
                max-width: 70vw;
                min-width: 70vw;
            }
         
            #left-side-created{

                @media (min-width: 700px) {
                    border-right: 2px dashed #EEEEEE;
                }
                @media (max-width: 700px) {
                    border-bottom: 2px dashed #EEEEEE;
                }
                
                padding: 40px 40px 0px 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                padding: 30px;
                min-width: 350px;
                min-height: 300px;
            
                #group-name-created {
                    font-size: 40px;
                    
                    color: #00b0ff;
                }

                #group-name-created::first-letter {
                    text-transform: uppercase;
                }

                div {
                    display:flex;
                    flex-direction: column;
                    align-items: flex-start;
                    p+p{
                        margin-top: 10px;
                    }
                }

            }  

            #right-side-created{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                flex: 1;
                padding: 30px;


                p::first-letter {
                    text-transform: uppercase;
                }

                div {
                    h3 {
                        margin-bottom: 5px;
                        margin-top: 30px;
                        
                    }
                    display: flex;
                    flex-direction: column;

                    span {
                        font-size: 14px;
                    }
                }
            }
        }
         
    }

    
`;
