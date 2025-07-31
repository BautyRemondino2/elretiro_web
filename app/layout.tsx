import './ui/globals.css';
import React from "react";
import Header from "./components/Header";
import { FC, PropsWithChildren } from "react";
import Footer from './components/Footer';
import { Cinzel, Open_Sans } from 'next/font/google';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700'] });
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400', '600'] });

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
      <html lang="en">
        <body className={`${cinzel.className} ${openSans.className}`}>
          <Header />
          <main className="main">
            {/* Botón flotante de WhatsApp */}
            <a
              href="https://wa.me/5493404631877"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-fixed"
            >
              <img src="/icons/whatsapp.jpg" alt="WhatsApp" className="w-14 h-14" />
            </a>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
};

export default RootLayout;
