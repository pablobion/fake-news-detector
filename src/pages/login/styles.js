import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;
    display: flex;

    .backgroundImage {
        position: absolute;
        height: 80vh;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
    .page { 
        flex: 1;
        display: flex;
        margin: 5% 5% 5% 5%;
    }

    .leftside {
        box-shadow: #c0c0c0 0px 0px 1vh 0.3px;
        flex: 1;
        max-width: 400px;
        min-width: 340px;
        height: max-content;
        display: flex;
        flex-direction: column;
        background-color: rgba(255, 255, 255, 0.4) ;
        border-radius: 2vw; 
        backdrop-filter: blur(3px);
        
        .title {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 10%;
            img {
                width: 3rem;
            }
            p {
                margin-left: 10px;
                font-size: 20px;    
            }
        }

        .modalLogin{
            padding: 5% 5% 5% 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;    
        }   
    }

    .rightside {
        width: 100%;
        flex: 1.5;
        margin-left: 2%;
        border: 1px solid;
        .detec-news{
            color: gray;
            font-size: 2.5vw;
            border: 1px solid;
            text-align: center;
        }

        .detec-emails {
            margin-top: 10px;
            color: gray;
            font-size: 1.2vw;
            border: 1px solid;
            text-align: center;
        }
    }


`

