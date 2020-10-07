import styled from 'styled-components'

export const Menu = styled.div`
   
    height: 60px;
    display: flex;
    padding: 5px 5px 10px 50px;

    button {
      border: none;
      background-color: transparent;
    }

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