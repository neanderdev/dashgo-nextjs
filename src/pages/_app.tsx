import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { theme } from '../styles/theme';
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SiderbarDrawerProvider>
        <Component {...pageProps} />
      </SiderbarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp
