import styled from 'styled-components'
import { shade } from 'polished'

export const Home = styled.div`
    
    margin: 10px 5px 0px 5px;
    
    background-color: white;

    .header {
        margin-bottom: 50px;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            flex-wrap: wrap;

            .header-title {
                font-size: 14px;

                @media (min-width: 700px){
                    font-size: 30px;
                }

                margin-right: 30px;
            }
        }
    }



    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        border: 1px solid;
        
        

        .content-textarea{
            border-radius: 1vh;
            resize: none;
            width: 800px;
            height: 400px;
            padding: 10px;
            cursor: text;
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
                position: absolute;
                bottom: 0;
                margin-bottom: 20px;

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
    }

`