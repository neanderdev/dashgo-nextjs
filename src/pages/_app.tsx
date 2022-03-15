import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { theme } from '../styles/theme';
import { makeServer } from '../services/mirage';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryCliente = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCliente}>
      <ChakraProvider resetCSS theme={theme}>
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp
