import * as React from 'react';

import { style } from './style.module.scss';

const { header } = style;

const Logo = () => {
  return <h1>Logo</h1>;
};

const Header = () => {
  return (
    <header style={header}>
      <Logo />
    </header>
  );
};

export default Header;
