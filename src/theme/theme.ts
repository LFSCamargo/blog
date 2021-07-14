import { pxToRem } from 'styled-toolset';

export const theme = {
	colors: {
		primary: '#fff',
		secondary: '#000',
	},
	fonts: {
		frank: 'Frank Ruhl Libre',
		roboto: 'Roboto',
		playFair: 'Playfair Display',
	},
	spacing: {
		xxs: pxToRem(2),
		xs: pxToRem(4),
		s: pxToRem(8),
		m: pxToRem(16),
		l: pxToRem(24),
		xl: pxToRem(32),
		xxl: pxToRem(64),
		xxxl: pxToRem(80),
	},
};
