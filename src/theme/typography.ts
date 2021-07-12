import { css } from 'styled-components';
import { getTheme, pxToRem } from 'styled-toolset';

const roboto = getTheme('fonts.roboto');
const playFair = getTheme('fonts.playFair');
const secondary = getTheme('colors.secondary');

export default css`
	h1 {
		font-size: ${pxToRem(40)};
		font-family: ${roboto};
		color: ${secondary};
	}
	h2 {
		font-size: ${pxToRem(36)};
		font-family: ${roboto};
		color: ${secondary};
	}
	h3 {
		font-size: ${pxToRem(24)};
		font-family: ${roboto};
		color: ${secondary};
	}
	h4 {
		font-size: ${pxToRem(16)};
		font-family: ${roboto};
		color: ${secondary};
	}
	p,
	span {
		font-family: ${playFair};
		color: ${secondary};
	}
`;
