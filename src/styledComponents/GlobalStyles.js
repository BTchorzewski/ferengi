import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%; 
        
    }

    body { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.primary};
    }
`;





