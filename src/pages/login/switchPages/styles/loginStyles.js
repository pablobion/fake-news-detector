import styled from 'styled-components'
import { shade } from 'polished'

export const LoginArea = styled.div`

        form {
                display: flex;
                flex-direction: column;
                align-items: center;
                div {
                        display: flex;
                        flex-direction: column;
                        span{
                                font-size: 1rem;
                                color: gray;
                                margin-top: 20px;
                        }
                        input {
                                font-size: 1.1rem;
                                width: 20rem;
                                height: 2.5rem;
                                margin-top: 5px;
                                padding: 0 10px;
                                border: 1px solid #6e6e6e;
                                border-radius: 0.9vh;
                        }
                        small{
                                margin: 10px 0px 10px 0px;
                                font-size: 0.8rem;
                                color: black;
                                &:hover {
                                color: ${shade(0.5, '#00B0FF')}
                                } 
                                cursor: pointer;
                        }
                }
                button{
                        background: #00B0FF;
                        border-radius: 1.2vh;
                        border: 0;
                        color: #FFF;
                        font-weight: bold;
                        transition: background-color 0.2s;
                        cursor: pointer;
                        &:hover {
                                background: ${shade(0.2, '#00B0FF')}
                        } 
                        margin-top: 30px;
                        height: 50px;
                        font-size: 20px;
                        width: 150px;
                }
        }
`

export const LinkCreateAccount = styled.div`
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 20px;
        text-decoration: none;
        span{
                font-size: 1.3rem;
                color: #008ac6;
                
                
        }
`