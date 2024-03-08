import React from 'react';

import { pageTitleText } from './style.module.scss';

const PageTitle = ({ text }: { text: string }) => {
  return <h1 className={pageTitleText}>{text}</h1>;
};

export default PageTitle;
