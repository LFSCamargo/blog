import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Loading } from '~/components';

export const Wrapper = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
`;

export default function Main() {
	const { push } = useRouter();

	useEffect(() => {
		push('home');
	}, []);

	return (
		<Wrapper>
			<Loading />
		</Wrapper>
	);
}
