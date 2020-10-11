import styled from 'styled-components'
import { shade } from 'polished'

export const Home = styled.div`
    /* Animations component */

    @keyframes shake {
                0% { transform: translate(1px, 1px) rotate(0deg); }
                10% { transform: translate(-1px, -2px) rotate(-1deg); }
                20% { transform: translate(-3px, 0px) rotate(1deg); }
                30% { transform: translate(3px, 2px) rotate(0deg); }
                40% { transform: translate(1px, -1px) rotate(1deg); }
                50% { transform: translate(-1px, 2px) rotate(-1deg); }
                60% { transform: translate(-3px, 1px) rotate(0deg); }
                70% { transform: translate(3px, 1px) rotate(-1deg); }
                80% { transform: translate(-1px, -1px) rotate(1deg); }
                90% { transform: translate(1px, 2px) rotate(0deg); }
                100% { transform: translate(1px, -2px) rotate(-1deg); }
    }

    /* animations lottie */
    #animation-girlsearch {
        position: absolute;
        bottom: 3%;
        width: 270px;
        @media (max-width: 700px){
            width: 100px;
        }
    }

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
                @media (min-width: 700px){
                    margin-right: 30px;
                    font-size: 30px;
                    
                }
                
            }

            button {
                @media (max-width: 400px){
                    margin-top: 5px;
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
        height: 85vh;
       
      


        /* TEXT MODE */
        .content-textarea{
            border-radius: 1vh;
            resize: none;
            width: 80vw;
            height: 350px;
            padding: 10px;
            margin-bottom: 5px;
            z-index: 1; /* deixa em cima da animação */
            background: rgba(255, 255, 255, 0.1); /* deixa o fundo branco transparente */
            backdrop-filter: blur(1px);
            cursor: text;

            @media (min-width: 700px){
                width: 60vw;
            }

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


        /* URL MODE */

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
        

        #verify-news {
            margin-bottom: 10px;
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
            border: 0.5px solid black;       
            border-radius: 1vh;
            padding: 10px;
            
            img {
                padding: 10px;
                animation: grow2 1s forwards;
                
                @keyframes grow2 {
                    from {
                        height: 15%;
                    }
                    to {
                        height: 40px;
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


            .content-footer {  
                button{
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

                
                    height: 50px;
                    font-size: 20px;
                    width: 150px;
                }
                #sendnews {
                    margin-bottom: 20px;
                    @media (min-width: 700px){
                        margin-bottom: 60px;
                    }
                }

                .pagination {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 20px;
                    margin-top: 10px;
                    
                    .paginations {
                        width: 20px;
                        height: 20px;
                        border: none;
                        border-radius: 30px;
                        border: 1px solid gray;
                        animation: fadeinpagination 2s forwards;
                        @keyframes fadeinpagination{
                             0% { opacity: 0; }
                            100% { opacity: 1; } 
                            }
                            @-moz-keyframes fadeIn {
                            0% { opacity: 0;}
                            100% { opacity: 1; }
                            }
                            @-o-keyframes fadeIn {
                            0% { opacity: 0; }
                            100% { opacity: 1; }
                            }
                            @keyframes fadeIn {
                            0% { opacity: 0; }
                            100% { opacity: 1; }
                            }
                        }
                    }
                    #pagination1 {
                        background-color: lightgray;
                    }
                    #pagination2 {
                        background-color: transparent;
                        margin-left: 10px;
                    }

                }
                
            }
        }
    }

`

export const Result = styled.div`
	background-color: ${(props) => props.color};
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px;

	.div-title-result {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		.title-result {
			font-size: 30px;
		}
		h1 + h1 {
			margin-top: 30px;
		}
	}

	.content-textarea {
		border-radius: 1vh;
		resize: none;
		width: 80vw;
		height: 350px;
		padding: 10px;
		cursor: text;

		@media (min-width: 700px) {
			width: 60vw;
		}
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
`
