import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pxToRem } from 'styled-toolset';
import { GitHubIcon } from '~/assets';

export const Touchable = styled(motion.div).attrs({
	whileHover: { scale: 1.3 },
	whileTap: { scale: 1 },
})`
	cursor: pointer;
`;

export const Wrapper = styled(motion.div)`
	display: flex;
	min-width: 41px;
	height: 238px;
	position: fixed;
	bottom: ${pxToRem(40)};
	left: ${pxToRem(40)};
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	div {
		cursor: pointer;
	}
`;

export const GHIcon = styled.img.attrs({
	src: GitHubIcon,
})`
	width: 40px;
	height: 40px;
`;

export const Icon = styled.img`
	width: 30px;
	height: 30px;
`;
