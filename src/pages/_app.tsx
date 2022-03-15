import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClientProvider } from 'react-query';
import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext';

import { makeServer } from '../services/mirage';
import { queryCliente } from '../services/queryClient';

import { theme } from '../styles/theme';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryCliente}>
      <ChakraProvider resetCSS theme={theme}>
        <SiderbarDrawerProvider>
          <Component {...pageProps} />
        </SiderbarDrawerProvider>
      </ChakraProvider>

      {process.env.NODE_ENV && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}

export default MyApp
