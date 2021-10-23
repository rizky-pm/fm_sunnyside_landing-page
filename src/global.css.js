import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
    }

    body {
        /* font-family: 'Barlow', sans-serif;
        font-family: 'Fraunces', serif; */
    }
`;

export default GlobalStyles;
