import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Alt from './components/alt/Alt';

const inter = Inter({ subsets: ['latin'], weight: ['700'] });

export const metadata: Metadata = {
  title: 'AraBul',
  description: 'Created by OranCo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-green-900`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <hr />
          <Footer />
          <hr />
          <Alt />
        </div>
      </body>
    </html>
  );
}
