import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import Providers from '@/components/Providers/Providers';
import Navbar from '../components/Navigation/Navbar';
import Footer from '@/components/Footer/Footer';
import { theme } from '../../theme';

export const metadata = {
  title: 'Write No More AI',
  description: 'Easy to use AI tools for those of us who can&apos;t write a single line more',
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ height: '100%' }}>
        <Providers>
          <MantineProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
