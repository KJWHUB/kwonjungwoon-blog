import '../styles/index.css';

import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { container } from './style.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  location: Location;
};

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <div>
      {location && <Header location={location} />}
      <main className={container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
