import { Link } from 'gatsby';
import { Github } from 'lucide-react';
import React from 'react';

import useSiteMetadata from '@/src/hooks/useStaticQuery';
import { classNames } from '@/src/utils/className';

import ThemeToggle from '../ThemeToggle';
import { active, header, headerWrap, listItem, listWrap } from './style.module.scss';

const isPathActive = (pathname: string, path: string) => {
  if (path === '/') return pathname === path;
  return pathname.includes(path);
};

const NavigationWrap = ({ location }: { location: Location }) => {
  const { pathname } = location;
  console.log('location', location);
  const routes = [
    {
      name: 'BLOG',
      path: '/',
    },
    {
      name: 'ABOUT',
      path: '/about/',
    },
    {
      name: 'TAGS',
      path: '/tags/',
    },
  ];
  return (
    <nav>
      <ul className={listWrap}>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} className={classNames(listItem, isPathActive(pathname, route.path) ? active : null)}>
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const AddOnMenu = () => {
  const metaData = useSiteMetadata();
  const { github } = metaData.author.social;

  return (
    <menu>
      <ul className={listWrap}>
        <li>
          <a href={github} target='_blank' rel='noreferrer noopener'>
            <Github />
          </a>
        </li>
        <li>
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
  console.log('header location', location);
  return (
    <div className={headerWrap}>
      <header className={header}>
        <NavigationWrap location={location} />
        <AddOnMenu />
      </header>
    </div>
  );
};

export default Header;
