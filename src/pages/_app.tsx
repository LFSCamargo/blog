import 'highlight.js/scss/github-dark.scss';
import highlight from 'highlight.js';
import { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { client } from '~/apollo';
import { Header } from '~/components';
import { GlobalStyle } from '~/theme/global';
import { theme } from '~/theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		highlight.initHighlighting();
	}, []);

	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<>
					<Header animate />
					<Component {...pageProps} />
					<GlobalStyle />
				</>
			</ThemeProvider>
		</ApolloProvider>
	);
};

export default MyApp;
