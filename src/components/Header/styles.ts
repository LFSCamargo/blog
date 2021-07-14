import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pxToRem, getTheme } from 'styled-toolset';

const roboto = getTheme('fonts.roboto');
const playFair = getTheme('fonts.playFair');
const extraSpacing = getTheme('spacing.xl');

export const LF = styled.span`
	font-weight: 900;
	font-size: ${pxToRem(40)};
	font-family: ${playFair};
`;

export const Link = styled.div`
	font-size: ${pxToRem(24)};
	font-family: ${roboto};
	font-weight: 500;
	margin-left: 28px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
	&:active {
		transform: scale(1);
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	padding: ${extraSpacing};
	width: 100%;
`;

export const LinksWrapper = styled(motion.div)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
