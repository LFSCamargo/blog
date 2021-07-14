import { getTheme, pxToRem, getProperty } from 'styled-toolset';
import styled from 'styled-components';
import { HTMLMotionProps, motion } from 'framer-motion';

const white = getTheme('colors.primary');
const roboto = getTheme('fonts.roboto');

const src = getProperty('src');

export const CardWrapper = styled(motion.div).attrs({
	whileHover: { scale: 1.1 },
	whileTap: { scale: 1 },
} as HTMLMotionProps<'div'>)<{ src: string }>`
	width: 338px;
	height: 401px;
	border-radius: 30px;
	padding: 30px;
	background: rgba(0, 0, 0, 0.65) url(${src});
	background-blend-mode: darken;
	background-size: cover;
	display: flex;
	align-items: flex-start;
	flex: 1;
	flex-direction: column;
	justify-content: flex-end;
	cursor: pointer;
`;

export const CardTagWrapper = styled.div`
	padding: 8px 14px;
	border-radius: 20px;
	background-color: ${white};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
	margin-left: -4px;
	span {
		font-family: ${roboto};
		font-weight: bold;
		font-size: ${pxToRem(12)};
	}
`;

export const CardTitle = styled.h3`
	color: ${white};
`;
