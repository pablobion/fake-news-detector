import styled from 'styled-components'

export const Menu = styled.div`
    background-color: gray;
    height: 40px;
    display: flex;

    div {
        width: 10px;
        height: 30px;
        background: red;
        transition: width 2s;
        text-overflow: clip;
        overflow: hidden;
    }

div:hover {
  width: 300px;
  background-color: yellow;
}

`