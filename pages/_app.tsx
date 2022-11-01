/**
 * Main React parent component
 */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import DefaultTheme from '@themes/DefaultTheme';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="msapplication-TileColor" content="#1c1c1c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Página administrativa de Corporación Zapata en Zapata Connect" />
        <title>Zapata Connect</title>
      </Head>

      <ThemeProvider theme={DefaultTheme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
      </ThemeProvider>

      {/*<UserProvider>
				<AuthGuard>
						<Component {...pageProps} />
				</AuthGuard>
			</UserProvider> */}
    </>
  );
}

export default App;
