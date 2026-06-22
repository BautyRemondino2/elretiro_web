import './ui/globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Cinzel, Open_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import RouteFade from './components/RouteFade';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-cinzel', display: 'swap' });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-open-sans', display: 'swap' });

export const metadata: Metadata = {
  title: 'Cabaña El Retiro | Genética Braford',
  description:
    'Cabaña El Retiro: más de 30 años produciendo genética Braford de la más alta calidad. Remate anual, historial, prensa y contacto.',
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cinzel.variable} ${openSans.variable}`}>
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <RouteFade>{children}</RouteFade>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}
