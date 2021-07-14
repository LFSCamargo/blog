import Markdown from 'markdown-to-jsx';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Content, Helmet } from '~/components';
import {
	BlogPostWrapper,
	Image,
	Wrapper,
	CardTagWrapper,
	CardTitle,
} from '~/styles/articlesStyles';
import { ArticleQuery } from '~/__generated__/ArticleQuery';

export default function Article() {
	const { query } = useRouter();

	const { data, loading } = useQuery<ArticleQuery>(
		gql`
			query ArticleQuery($slug: String!) {
				blogPostCollection(limit: 1, where: { postSlug: $slug }) {
					items {
						title
						featuredImage {
							url
						}
						tag
						postBody
						description
					}
				}
			}
		`,
		{
			variables: {
				slug: query.slug,
			},
		}
	);

	const {
		postBody = '',
		featuredImage = { url: '' },
		tag = '',
		title = 'Loading...',
		description = '',
	} = data?.blogPostCollection.items[0] || {};

	return (
		<Wrapper>
			<Helmet title={title} description={description} />
			<Content loading={loading}>
				<BlogPostWrapper>
					<Image src={featuredImage.url}>
						<CardTagWrapper>
							<span>{tag}</span>
						</CardTagWrapper>
						<CardTitle>{title}</CardTitle>
					</Image>
					<Markdown>{postBody}</Markdown>
				</BlogPostWrapper>
			</Content>
		</Wrapper>
	);
}
