import React from 'react';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar /> {/* Your Sidebar Component */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        <Header /> {/* Your Header Component */}
        <main style={{ padding: '20px', flex: 1 }}>
          {children} {/* This is where your page content will render */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
