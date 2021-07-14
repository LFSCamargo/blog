import styled from 'styled-components';
import { getProperty, getTheme, pxToRem } from 'styled-toolset';
import Lottie, { LottieProps } from 'react-lottie';
import { Articles } from '~/animations';

const src = getProperty('src');
const white = getTheme('colors.primary');
const roboto = getTheme('fonts.roboto');

export const Image = styled.div<{ src: string }>`
	width: 900px;
	height: 500px;
	border-radius: 30px;
	padding: 30px;
	background: rgba(0, 0, 0, 0.3) url(${src});
	background-blend-mode: darken;
	background-size: cover;
	display: flex;
	align-items: flex-start;
	flex: 1;
	flex-direction: column;
	justify-content: flex-end;
	transform: scale(1.12);
	margin-bottom: 100px;
	margin-top: 50px;
`;

export const CardTagWrapper = styled.div`
	padding: 12px 30px;
	border-radius: 100px;
	background-color: ${white};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	margin-left: -4px;
	span {
		font-family: ${roboto};
		font-weight: bold;
		font-size: ${pxToRem(16)};
	}
`;

export const CardTitle = styled.h2`
	color: ${white};
`;

export const BlogPostWrapper = styled.div`
	code,
	pre {
		color: #f8f8f2;
		background: none;
		text-shadow: 0 1px rgba(0, 0, 0, 0.3);
		font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		word-wrap: normal;
		line-height: 1.5;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		-webkit-hyphens: none;
		-moz-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
	}

	/* Code blocks */
	pre {
		padding: 1em;
		margin: 0.5em 0;
		overflow: auto;
		border-radius: 0.3em;
	}

	:not(pre) > code,
	pre {
		background: #282a36;
	}

	/* Inline code */
	:not(pre) > code {
		padding: 0.1em;
		border-radius: 0.3em;
		white-space: normal;
	}

	.token.comment,
	.token.prolog,
	.token.doctype,
	.token.cdata {
		color: #6272a4;
	}

	.token.punctuation {
		color: #f8f8f2;
	}

	.namespace {
		opacity: 0.7;
	}

	.token.property,
	.token.tag,
	.token.constant,
	.token.symbol,
	.token.deleted {
		color: #ff79c6;
	}

	.token.boolean,
	.token.number {
		color: #bd93f9;
	}

	.token.selector,
	.token.attr-name,
	.token.string,
	.token.char,
	.token.builtin,
	.token.inserted {
		color: #50fa7b;
	}

	.token.operator,
	.token.entity,
	.token.url,
	.language-css .token.string,
	.style .token.string,
	.token.variable {
		color: #f8f8f2;
	}

	.token.atrule,
	.token.attr-value,
	.token.function,
	.token.class-name {
		color: #f1fa8c;
	}

	.token.keyword {
		color: #8be9fd;
	}

	.token.regex,
	.token.important {
		color: #ffb86c;
	}

	.token.important,
	.token.bold {
		font-weight: bold;
	}

	.token.italic {
		font-style: italic;
	}

	.token.entity {
		cursor: help;
	}
	max-width: 900px;
	p {
		font-size: ${pxToRem(24)};
		code {
			background-color: #282a36;
			padding: 2px 5px;
			font-size: ${pxToRem(18)};
			border-radius: 5px;
		}
	}
	h1,
	p {
		margin: 20px 0px;
	}
`;

export const AnimationView = styled(Lottie).attrs({
	width: 380,
	height: 380,
	isClickToPauseDisabled: true,
	options: {
		loop: true,
		autoplay: true,
		animationData: Articles,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	},
} as LottieProps)``;

export const ProfilePic = styled.img`
	width: 400px;
	height: 400px;
	border-radius: 200px;
	object-fit: cover;
`;

export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PageHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const PicWrapper = styled.div`
	width: 500px;
	height: 500px;
	align-items: center;
	justify-content: center;
	display: flex;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 600px;
	max-height: 500px;
	margin-left: -40px;
`;

export const PageDesc = styled.p`
	font-size: ${pxToRem(30)};
	white-space: pre-wrap;
	margin-top: 10px;
	width: 499px;
`;

export const Grid = styled.div`
	padding-bottom: 200px;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 48px;
	row-gap: 80px;
`;
