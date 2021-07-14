import { gql, useQuery } from '@apollo/client';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Content, Helmet } from '~/components';
import { Grid, GridWrapper, Wrapper, DataWrapper, Description } from './styles';
import { AboutQuery } from './__generated__/AboutQuery';

export default function About() {
	const { data, loading } = useQuery<AboutQuery>(gql`
		query AboutQuery {
			aboutSectionsCollection {
				items {
					title
					description {
						json
					}
				}
			}
		}
	`);

	return (
		<Wrapper>
			<Helmet
				title="About"
				description="This is the template for creating new Projects with NextJS"
			/>
			<Content loading={loading}>
				<GridWrapper>
					<Grid>
						{(data?.aboutSectionsCollection?.items || []).map(e => (
							<DataWrapper key={e.title}>
								<h2>{e.title}</h2>
								<Description
									dangerouslySetInnerHTML={{
										__html: documentToHtmlString(e.description.json),
									}}
								/>
							</DataWrapper>
						))}
					</Grid>
				</GridWrapper>
			</Content>
		</Wrapper>
	);
}
