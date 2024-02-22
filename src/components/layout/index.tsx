import React, { ReactNode } from 'react';
import Musicbar from '@/components/musicbar';
import Sidebar from '@/components/sidebar';

interface PageProps {
  children: ReactNode;
}

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>{children}</div>
      </div>
      <Musicbar />
    </div>
  );
};

export default Layout;
