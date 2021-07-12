import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
	padding-left: 140px;
	padding-right: 40px;
	padding-top: 20px;
	display: flex;
`;

export const LoadingWrapper = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;
