import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

import { themeToggle } from './index.module.css';

export type Theme = 'light' | 'dark';

export const getLocalstorageTheme = () => {
  return localStorage.getItem('theme') as Theme;
};
export const setLocalstorageTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
};

export const updateThemeOnHtmlEl = (theme: Theme) => {
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
    htmlElement.setAttribute('data-theme', theme);
  }
};

export const getSystemTheme = (): Theme => {
  console.log('test', window);
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(getLocalstorageTheme());

  const handleClick = () => {
    setTheme((prev) => {
      const t = prev === 'light' ? 'dark' : 'light';
      updateThemeOnHtmlEl(t);
      setLocalstorageTheme(t);
      return t;
    });
  };

  return (
    <button title='Toggles light & dark' onClick={handleClick} className={themeToggle}>
      {theme === 'light' ? <Sun strokeWidth={1.75} /> : <Moon strokeWidth={1.75} />}
    </button>
  );
};

export default ThemeToggle;
