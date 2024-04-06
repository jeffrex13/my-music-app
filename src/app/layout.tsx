// import { useRouter } from 'next/router';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music app',
  description: 'A music app built with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <div style={{ display: 'flex', height: '100vh' }}>
          <main className={inter.className}>{children}</main>
        </div>
      </body>
    </html>
  );
}
