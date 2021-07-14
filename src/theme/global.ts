import { createGlobalStyle } from 'styled-components';
import { getTheme } from 'styled-toolset';
import typography from './typography';
import prism from './prism';

const white = getTheme('colors.primary');
const black = getTheme('colors.secondary');

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${white};
    color: ${black};
  }

  ${typography}
	${prism}
`;
