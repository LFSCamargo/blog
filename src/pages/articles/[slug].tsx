import Markdown from 'markdown-to-jsx';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { Content } from '~/components';
import {
	BlogPostWrapper,
	Image,
	Wrapper,
	CardTagWrapper,
	CardTitle,
} from './styles';
import { ArticleQuery } from './__generated__/ArticleQuery';

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

	const { postBody = '', featuredImage = { url: '' }, tag = '', title = '' } =
		data?.blogPostCollection.items[0] || {};

	return (
		<Wrapper>
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
