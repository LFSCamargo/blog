import styled from 'styled-components';
import { pxToRem } from 'styled-toolset';

export const GridWrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	width: 85vw;
`;

export const Grid = styled.div`
	margin-left: 40px;
	padding: 80px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	column-gap: 80px;
	row-gap: 80px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
`;

export const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 400px;
	height: 250px;
`;

export const Description = styled.p`
	font-size: ${pxToRem(36)};
	white-space: pre-line;
`;
