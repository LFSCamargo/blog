import styled from 'styled-components';
import { pxToRem } from 'styled-toolset';

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
	justify-content: space-between;
	margin-top: 140px;
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
	width: 500px;
	max-height: 500px;
`;

export const PageDesc = styled.p`
	font-size: ${pxToRem(36)};
	white-space: pre-wrap;
`;
