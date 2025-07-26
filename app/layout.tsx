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
            {children}
          </main>
          <Footer />
        </body>
      </html>
    );
};

export default RootLayout;
