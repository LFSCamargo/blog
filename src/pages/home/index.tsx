import { Helmet } from '~/components';
import { Wrapper } from './styles';

export default function Home() {
	return (
		<Wrapper>
			<Helmet
				title="Welcome"
				description="This is the template for creating new Projects with NextJS"
			/>
			<main>
				<h1>Welcome to next.js template</h1>
			</main>
		</Wrapper>
	);
}
