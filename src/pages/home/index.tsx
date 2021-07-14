import { Content, Helmet } from '~/components';
import {
	Wrapper,
	Col,
	PageHeader,
	PicWrapper,
	ProfilePic,
	PageDesc,
} from '~/styles/homeStyles';

export default function Home() {
	return (
		<Wrapper>
			<Helmet
				title="Welcome"
				description="This is the template for creating new Projects with NextJS"
			/>
			<Content>
				<PageHeader>
					<Col>
						<h2>Code and coffee.</h2>
						<PageDesc>
							My name is Luiz Fernando and that&apos;s my personal website where
							i share some life experiences and also some cool projects!
						</PageDesc>
					</Col>
					<PicWrapper>
						<ProfilePic src="https://images.ctfassets.net/bniasprfxkbv/7CH7mLbUE45jJeYrVnDnVb/a066ef9d0baa7d9ff9183d23e021c8e1/Screen_Shot_2021-07-10_at_11.48.27.png" />
					</PicWrapper>
				</PageHeader>
			</Content>
		</Wrapper>
	);
}
