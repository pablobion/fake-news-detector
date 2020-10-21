import styled from "styled-components";

export const Container = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    textarea {
        border-radius: 1vh;
        resize: none;
        width: 80vw;
        height: 400px;
        padding: 10px;
        cursor: text;
        border: 1px solid lightgray;

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
    }
`;
