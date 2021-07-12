import { createGlobalStyle } from 'styled-components';
import { getTheme } from 'styled-toolset';

const white = getTheme('colors.primary');
const black = getTheme('colors.secondary');
const fonts = getTheme('fonts.sanFrancisco');

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${white};
    color: ${black};
    font-family: ${fonts}, sans-serif;
  }
`;
