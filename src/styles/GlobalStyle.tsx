import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }

    body, button, div,
    h1, h2, h3, h4, h5, h6, 
    input, li, ol, p, textarea, ul {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    svg {
        cursor: pointer;
    }

    input, textarea {
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color : transparent;
        
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;

export default GlobalStyle;
