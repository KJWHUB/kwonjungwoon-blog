import React from 'react';

import { header } from './style.module.scss';
import ThemeToggle from '../ThemeToggle';

const Logo = () => {
  return <h1>Logo</h1>;
};

const Header = () => {
  return (
    <header className={header}>
      <Logo />
      <ThemeToggle />
    </header>
  );
};

export default Header;
