import { Link } from 'gatsby';
import { Github } from 'lucide-react';
import React from 'react';

import ThemeToggle from '../ThemeToggle';
import { header, headerWrap, listItem, listWrap } from './style.module.scss';

const Logo = () => {
  return <h1>Blog</h1>;
};

const NavigationWrap = () => {
  const routes = [
    {
      path: '/',
      icon: <Logo />,
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Category',
      path: '/category',
    },
  ];
  return (
    <nav>
      <ul className={listWrap}>
        {routes.map((route) => (
          <li key={route.path} className={listItem}>
            <Link to={route.path}>{route.name || route.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const AddOnMenu = () => {
  return (
    <menu>
      <ul className={listWrap}>
        <li className={listItem}>
          <a href='https://github.com/KJWHUB' target='_blank' rel='noreferrer noopener'>
            <Github />
          </a>
        </li>
        <li className={listItem}>
          <ThemeToggle />
        </li>
      </ul>
    </menu>
  );
};

type HeaderProps = {
  location: Location;
};

const Header: React.FC<HeaderProps> = ({ location }) => {
  // const { pathname } = location;
  console.log('aaa', location);
  return (
    <div className={headerWrap}>
      <header className={header}>
        <NavigationWrap />
        <AddOnMenu />
      </header>
    </div>
  );
};

export default Header;
