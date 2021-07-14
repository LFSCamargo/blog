import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { ArticleCard, Content, Helmet } from '~/components';
import {
	Wrapper,
	Col,
	PageHeader,
	PicWrapper,
	AnimationView,
	PageDesc,
	Grid,
} from '~/styles/articlesStyles';
import {
	ArticlesQuery,
	ArticlesQueryVariables,
} from '~/__generated__/ArticlesQuery';

export default function Articles() {
	const { push } = useRouter();
	const { data, loading } = useQuery<ArticlesQuery, ArticlesQueryVariables>(
		gql`
			query ArticlesQuery($limit: Int) {
				blogPostCollection(limit: $limit) {
					total
					limit
					items {
						postSlug
						title
						tag
						postBody
						featuredImage {
							url
						}
					}
				}
			}
		`,
		{
			variables: {
				limit: 10,
			},
		}
	);

	return (
		<Wrapper>
			<Helmet
				title="Articles"
				description="This is the template for creating new Projects with NextJS"
			/>
			<Content loading={loading}>
				<PageHeader>
					<PicWrapper>
						<AnimationView />
					</PicWrapper>
					<Col>
						<h2>Articles</h2>
						<PageDesc>
							Here is where i share my content and express my self about the
							stuff that i learned and where i share my experiences
						</PageDesc>
					</Col>
				</PageHeader>
				<Grid>
					{(data?.blogPostCollection?.items || []).map(e => {
						return (
							<ArticleCard
								onClick={() => push(`/articles/${e.postSlug}`)}
								key={e.postSlug}
								title={e.title}
								image={e.featuredImage.url}
								tag={e.tag}
							/>
						);
					})}
				</Grid>
			</Content>
		</Wrapper>
	);
}
