import styled from 'styled-components'

export const MenuMobile = styled.div`

height: 50px;
input{
  display:none;
}

.menu-hamb {
      
        width: 100vw;
        height: 80px;
        position: absolute;
        transition: .5s ease-in-out;
    }


input:checked ~ label .menu-hamb {
        background-color: rgba(255, 255, 255, 0.5) ;
        backdrop-filter: blur(2px);
        width: 100vw;
        height: 100vh;
        position:fixed;
    }

.hamburguer{
  display:block;
  width:40px;
  height:5px;
  border-radious: 2px;
  background:#333;
  position:relative;
  left:5%;
  top:30px;
  transition: .5s ease-in-out;
}

.hamburguer:after,
.hamburguer:before{
  width:100%;
  height:100%;
  content:'';
  background:#333;
  position:absolute;
  transition: .5s ease-in-out;
}

.hamburguer:before{
  top:-10px;
}

.hamburguer:after{
  bottom:-10px;
}

  input:checked ~ label .hamburguer {
        transform: rotate(45deg);
    }

    input:checked ~ label .hamburguer:before {
        transform: rotate(90deg);
        top: 0;
    }

    input:checked ~ label .hamburguer:after {
        transform: rotate(90deg);
        bottom: 0;
    }

input:checked ~ .ul-mbl {
  opacity:1;
}

.ul-mbl {
   position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    font-size: 20px;
    opacity: 0;
    transition: .25s .1s ease-in-out;
    z-index: 1

    
}

.ul-mbl div {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  a {
    margin-left: 20px;
  }
}

.ul-mbl img {
  width: 50px;
}



.ul-mbl li{
  margin:40px auto;
}
.ul-mbl a{
  color: #333;
  text-transform: uppercase;
  text-decoration: none;
  margin: 10px auto;

}
`












export const Menu = styled.div`
   
    height: 60px;
    display: flex;
    
    @media (min-width: 500px){ 
      padding: 5px 5px 10px 50px;
    }

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

        @media (min-width: 500px){ 
          width: 80px;
          height: 50px;
          display: flex;
          align-items: center;
          transition: width 1s;
          text-overflow: clip;
          overflow: hidden;
          margin-left: 20px;
        }

        .icon{
          width: 35px;
          @media (min-width: 500px){ 
            width: 50px;
          }
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