import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

import { LinkProvider } from '../context/linkContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <LinkProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </LinkProvider>
    </>
  );
}
export default MyApp;
