import { css } from 'styled-components';
import { getTheme, pxToRem } from 'styled-toolset';

const roboto = getTheme('fonts.roboto');
const frank = getTheme('fonts.frank');
const secondary = getTheme('colors.secondary');

export default css`
	img {
		width: 900px;
		transition: 1s;
		border-radius: 10px;
		:hover {
			transform: scale(1.04);
		}
	}
	ol {
		margin: 20px;
		code {
			background-color: #282a36 !important;
			padding: 2px 5px;
			font-size: ${pxToRem(18)};
			border-radius: 5px;
		}
	}
	li {
		font-family: ${frank};
		font-size: ${pxToRem(24)};
		margin: 10px 20px;
		code {
			background-color: #282a36 !important;
			padding: 2px 5px;
			font-size: ${pxToRem(18)};
			border-radius: 5px;
		}
	}
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
		font-family: ${frank};
		color: ${secondary};
	}
`;
