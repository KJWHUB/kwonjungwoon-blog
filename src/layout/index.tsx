import React, { createContext, useState } from 'react';
import '../styles/index.css';

import { container } from './style.module.scss';

import Footer from '../components/Footer';
import Header from '../components/Header';
import useTheme, { getSystemTheme } from '../hooks/useTheme';

type LayoutProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext('light');

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { setTheme, theme, setLocalstorageTheme } = useTheme();

  setLocalstorageTheme(getSystemTheme());
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <main className={container}>{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
