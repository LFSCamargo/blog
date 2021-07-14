import styled from 'styled-components';
import { pxToRem } from 'styled-toolset';
import Lottie, { LottieProps } from 'react-lottie';
import { ContactUs } from '~/animations';

export const AnimationView = styled(Lottie).attrs({
	width: 400,
	height: 400,
	isClickToPauseDisabled: true,
	options: {
		loop: true,
		autoplay: true,
		animationData: ContactUs,
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
	margin-top: 150px;
`;

export const AnimationWrapper = styled.div`
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
	button {
		margin-left: -10px;
	}
`;

export const PageDesc = styled.p`
	font-size: ${pxToRem(30)};
	white-space: pre-wrap;
	margin-top: 10px;
	width: 499px;
	margin-bottom: 20px;
`;
