import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat-Medium';
        font-size: 12px;
    }
    a{ text-decoration:none; color: black }
    ul {list-style: none }
    h1,h2,h3,h4,h5,h6 {
        margin: 0;
    } 
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 24px;
    }
    h3 {
        font-size: 20px;
    }
    h4{
        font-size: 18px;
    }
    h5 {
        font-size:  16px;
    }
    h6{ 
        font-size: 12px;
    }
`;

export default GlobalStyles;
