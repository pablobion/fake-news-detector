import styled from 'styled-components'

export const Menu = styled.div`
    border: 1px solid lightgray;
    height: 60px;
    display: flex;
    box-shadow: 1px 1px 10px 0.1px lightgray;
    padding: 5px 5px 0px 50px;

    div {
        width: 80px;
        height: 50px;
        display: flex;
        align-items: center;
        transition: width 1s;
        text-overflow: clip;
        overflow: hidden;
        margin-left: 20px;

        .icon{
          width: 50px;
        }
        p{
          padding-left: 30px;
          font-size: 20px;
        }
    }
    

div:hover {
  width: 200px;
  
}

`