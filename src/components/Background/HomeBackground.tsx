import React from 'react';

import { homeBackground } from './home-background.module.scss';

const style = {
  backgroundImage: 'url(images/simon-spring-PR3GfTli3J4-unsplash.jpg)',
};

function HomeBackground({ children }: { children?: React.ReactNode }) {
  return (
    <div className={homeBackground} style={style}>
      {children}
    </div>
  );
}

export default HomeBackground;
