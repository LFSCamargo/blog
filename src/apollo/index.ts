import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphAPI, Token } from '~/env';

const httpLink = createHttpLink({
	uri: GraphAPI,
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			Authorization: `Bearer ${Token}`,
		},
	};
});

export const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
