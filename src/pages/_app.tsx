import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../theme/global';
import { theme } from '../theme/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={theme}>
		<>
			<Component {...pageProps} />
			<GlobalStyle />
		</>
	</ThemeProvider>
);

export default MyApp;
