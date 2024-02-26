import React from 'react';
import '../styles/index.css';

import { container } from './style.module.scss';

import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
