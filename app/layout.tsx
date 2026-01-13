import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { globalStyles } from './styles/global';
import { getCssText } from './styles';
import { SeedProvider } from './api/seed/seedProvider';
import { ToastProvider } from './ToastProvider';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'App',
  description: 'Aplicação Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();

  return (
    <html lang="pt-BR">
      <head>
        <style
          id="stitches"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>

      <body className={`${inter.variable} antialiased`}>
        <SeedProvider>
          <ToastProvider />
          {children}
        </SeedProvider>
      </body>
    </html>
  );
}
