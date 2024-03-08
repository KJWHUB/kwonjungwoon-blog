import { type RenderBodyArgs } from 'gatsby';
import { createElement } from 'react';

const HtmlAttributes = {
  lang: 'ko',
};

const ThemeBodyScript = createElement('script', {
  key: 'gatsby-plugin-dark-mode',
  dangerouslySetInnerHTML: {
    // html data-theme  속성과 localStorage에 저장된 테마를 동기화 및 시스템 테마를 가져와 기본 세팅
    __html: `
      (function() {
        const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      })();
    `,
  },
});

export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }: RenderBodyArgs) => {
  setHtmlAttributes(HtmlAttributes);
  setPreBodyComponents([ThemeBodyScript]);
};
