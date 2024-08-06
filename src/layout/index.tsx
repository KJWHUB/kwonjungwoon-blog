import '../styles/index.css';

import React from 'react';

import HomeBackground from '../components/Background/HomeBackground';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { container } from './style.module.scss';

type LayoutProps = {
  children: React.ReactNode;
  location: Location;
};

const TitleComponent = () => {
  const TITLE = 'POST';
  return (
    <p
      style={{
        color: 'white',
        fontSize: '6rem',
        fontWeight: 400,
        letterSpacing: '0.5em',
        lineHeight: '1.5',
        textAlign: 'center',
        backdropFilter: 'blur(1px)',
        borderRadius: '50px',
        paddingLeft: '1rem',
        opacity: 0.8,
      }}
    >
      {[...TITLE].map((letter, index) => (
        // 플립 애니메이션을 위한 span 태그
        <span key={index}>{letter}</span>
      ))}
    </p>
  );
};

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  return (
    <div>
      {location && <Header location={location} />}
      {location.pathname === '/' && (
        <HomeBackground>
          <TitleComponent />
        </HomeBackground>
      )}
      <main className={container}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
