import styled from 'styled-components'
import { shade } from 'polished'

export const Home = styled.div`
    background-color: white;


    .header {
        margin-top: 20px;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            flex-wrap: wrap;

            .header-title {
                font-size: 14px;
                @media (min-width: 500px){
                    font-size: 30px;
                }
                margin-right: 30px;
            }

            button {
                @media (max-width: 400px){
                    margin-top: 10px;
                }
                font-size: 14px;
                background: #00B0FF;
                color: white;
                border: none;
                width: 150px;
                height: 30px;
                border-radius: 10vh;
                &:hover {
                    background: ${shade(0.1, '#00B0FF')}
                } 
            }
        }
    }
    

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding-top: 80px;
        flex: 1;
        height: 90vh;

        .content-textarea{
            border-radius: 1vh;
            resize: none;
            width: 80vw;

            @media (min-width: 700px){
                width: 60vw;
            }

            height: 350px;
            padding: 10px;
            cursor: text;
            animation: grow1 1s forwards;

            @keyframes grow1 {
                from {
                    height: 10%;
                }
                to {
                    height: 75%;
                }
            }

        }

        textarea::-webkit-scrollbar {
            width: 12px;
            background-color: #F5F5F5; 
        }

        textarea::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
            background-color: #4285F4; 
        }

            button{
                margin-bottom: 100px;
                background:  #009b00;
                border-radius: 1.2vh;
                border: 0;
                color: #FFF;
                font-weight: bold;
                transition: background-color 0.2s;
                cursor: pointer;

                &:hover {
                    background: ${shade(0.2, '#009b00')}
                } 

                margin-top: 30px;
                height: 50px;
                font-size: 20px;
                width: 150px;
            }

        .textmode-title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            
            h3 {
                margin-left: 10px;
            }

            img{
                animation-name: example;
                animation-duration: 0.5s;

                @keyframes example {
                    from {transform: rotate(180deg)}
                    to {transform: rotate(360deg)}
                }
            }
        }

        .urlmode-title {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            
            h3 {
                margin-left: 10px;
            }

            img {
                animation-name: example;
                animation-duration: 0.5s;

                @keyframes example {
                    from {transform: rotate(180deg)}
                    to {transform: rotate(360deg)}
                }
            }
            
        }
        
        .urlmode{
            display: flex;
            align-items: center;
            width: 80vw;
            height: 40px;
            font-size: 20px;
            @media (min-width: 700px){
                width: 60vw;
                height: 60px;
            }      
            border: 0.5px solid;       
            border-radius: 1vh;
            padding: 10px;
            
            img {
                padding: 10px;
                animation: grow2 1s forwards;
                @keyframes grow2 {
                    from {
                        height: 5%;
                    }
                    to {
                        height: 90%;
                    }
            }
            }

            input {
                flex: 1;
                line-height: 2rem;
                width: 10px;
                border: none;
                @media (min-width: 700px){
                    line-height: 3.5rem;
                    width: 10px;
                }      
            }
            animation: grow0 1s forwards;
            @keyframes grow0 {
                from {
                    height: 75%;
                }
                to {
                    height: 10%;
                }
            }
        }
    }

    .result {
        height: 100vh;
        display: flex;
        justify-content: center;
        padding: 20px;
    }


    #section2 {
        background-color: OldLace;
    }

`