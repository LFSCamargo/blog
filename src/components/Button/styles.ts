import styled from 'styled-components';
import { getTheme, pxToRem, conditionalStyle } from 'styled-toolset';

const isTransparent = conditionalStyle('transparent');
const mediumSpacing = getTheme('spacing.m');
const black = getTheme('colors.primary');
const white = getTheme('colors.secondary');

export interface ButtonProps {
	transparent?: boolean;
	loading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	type?: 'submit' | 'reset' | 'button';
}

export const Button = styled.button<ButtonProps>`
	padding: ${mediumSpacing};
	outline: 0;
	border-radius: 10px;
	border: none;
	font-size: ${pxToRem(16)};
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.5;
	letter-spacing: 0.12px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${isTransparent(black, white)};
	color: ${isTransparent(white, black)};
	transition: background-color 0.3s cubic-bezier(0.19, 1, 0.22, 1),
		border-color 0.3s cubic-bezier(0.19, 1, 0.22, 1),
		opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1),
		color 0.3s cubic-bezier(0.19, 1, 0.22, 1);
	&:hover {
		cursor: pointer;
	}
	&:disabled {
		&:hover {
			cursor: not-allowed;
		}
		opacity: 0.5;
	}
	&:active {
		opacity: 0.5;
	}
	&[data-loading='true'] {
		&:hover {
			cursor: not-allowed;
		}
	}
`;
