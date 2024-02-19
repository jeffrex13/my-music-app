import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from './components/sidebar';
import Musicbar from './components/musicbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music app',
  description: 'A music app built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <div className="flex flex-col h-screen">
        <div style={{ display: 'flex', height: '100vh' }}>
          <Sidebar />
          <main
            className={inter.className}
            style={{ flex: 1, padding: '20px' }}
          >
            {children}
          </main>
        </div>
        <Musicbar />
      </div>
    </html>
  );
}
