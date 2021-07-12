import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Loading } from '~/components';
import { Wrapper } from './styles';

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
