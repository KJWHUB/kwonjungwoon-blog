import { Link } from 'gatsby';
import React from 'react';

import ThemeToggle from '../ThemeToggle';
import { header } from './style.module.scss';

const Logo = () => {
  return <h1>Logo</h1>;
};

const NavigationWrap = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>
            <Logo />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className={header}>
      <NavigationWrap />
      <ThemeToggle />
    </header>
  );
};

export default Header;
