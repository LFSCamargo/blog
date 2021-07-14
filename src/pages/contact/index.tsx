import { Button, Content, Helmet } from '~/components';
import {
	Wrapper,
	Col,
	PageHeader,
	AnimationView,
	PageDesc,
	AnimationWrapper,
} from '~/styles/contactStyles';

export default function Contact() {
	return (
		<Wrapper>
			<Helmet
				title="Articles"
				description="This is the template for creating new Projects with NextJS"
			/>
			<Content>
				<PageHeader>
					<AnimationWrapper>
						<AnimationView />
					</AnimationWrapper>
					<Col>
						<h2>Contact</h2>
						<PageDesc>
							To get in touch with me just contact me click the button bellow
						</PageDesc>
						<Button
							onClick={() => window.open('mailto:luizepauloxd@gmail.com')}
						>
							Talk with me
						</Button>
					</Col>
				</PageHeader>
			</Content>
		</Wrapper>
	);
}
