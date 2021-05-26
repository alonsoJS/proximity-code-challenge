import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body,
   #root {
    margin: 0;
    padding: 0;
    background: ${theme.colors.gray};
    min-height: 100vh;
  }
  
  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
`;

export default GlobalStyle;
