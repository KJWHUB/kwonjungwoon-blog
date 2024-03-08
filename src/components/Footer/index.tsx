import React, { useEffect, useState } from 'react';

import { classNames } from '@/src/utils/className';

import { footer, scrollbarFalse, scrollbarTrue } from './style.module.scss';

const Footer = () => {
  const [isScrollBar, setIsScrollBar] = useState(true);

  useEffect(() => {
    // 문서 전체의 높이
    const documentHeight = document.body.scrollHeight;

    // 브라우저 창의 높이
    const windowHeight = window.innerHeight;

    // 문서 전체의 높이가 브라우저 창의 높이보다 클 경우 스크롤바가 존재함
    const isScrollBarExist = documentHeight > windowHeight;

    if (!isScrollBarExist) setIsScrollBar(false);
  }, []);

  return (
    <footer className={classNames(footer, isScrollBar ? scrollbarTrue : scrollbarFalse)}>
      <p>© 2024 Kwon Jungwoon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
