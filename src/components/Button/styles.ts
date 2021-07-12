import styled from 'styled-components';
import { getTheme, pxToRem, conditionalStyle } from 'styled-toolset';

const roboto = getTheme('fonts.roboto');
const extraSpacing = getTheme('spacing.xl');
const primary = getTheme('colors.primary');
const secondary = getTheme('colors.secondary');

const isTransparent = conditionalStyle('transparent');

export interface ButtonProps {
	transparent?: boolean;
	loading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
}

export const Button = styled.button<ButtonProps>`
	padding: 25px ${extraSpacing};
	outline: 0;
	border-radius: 100px;
	border: none;
	font-size: ${pxToRem(20)};
	font-weight: bold;
	font-family: ${roboto}, sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${isTransparent(primary, secondary)};
	color: ${isTransparent(secondary, primary)};
	transition: 0.4s;
	cursor: pointer;
	&:active {
		opacity: 0.5;
	}
`;
