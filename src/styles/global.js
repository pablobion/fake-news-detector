import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
     * {
          margin:0;
          padding:0;
          outline: 0;
          box-sizing: border-box;
          
          
     }
     body {
          background-color: #FFFDFB; 
          /* overflow: hidden; */
          
     }
     html {
          scroll-behavior: smooth;
     }
     body, input, button {
          font: 62.5% Roboto, sans-serif;
     }
     #root {
          margin: 0 auto;
     }
     button {
          cursor: pointer;
     }
`;
