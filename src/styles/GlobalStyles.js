import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Poppins', sans-serif;
        padding: 0rem 1.5rem;
    }

    h1{
        font-size: 2.8rem;
    }

    h2{
        font-weight: 600;
    }
`;

export default GlobalStyle;