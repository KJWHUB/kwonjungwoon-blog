import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { themeToggle } from './index.module.css';

type Theme = 'light' | 'dark';

const getLocalstorageTheme = () => {
  return localStorage.getItem('theme') as Theme;
};
const setLocalstorageTheme = (theme: Theme) => {
  localStorage.setItem('theme', theme);
};

const updateThemeOnHtmlEl = (theme: Theme) => {
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
    htmlElement.setAttribute('data-theme', theme);
  }
};

const getSystemTheme = (): Theme => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleClick = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    const systemTheme = getSystemTheme();
    setLocalstorageTheme(systemTheme);
    setTheme(systemTheme);
  }, []);

  useEffect(() => {
    updateThemeOnHtmlEl(theme);
    setLocalstorageTheme(theme);
  }, [theme]);
  return (
    <button title='Toggles light & dark' onClick={handleClick} className={themeToggle}>
      {theme === 'light' ? <Sun strokeWidth={1.75} /> : <Moon strokeWidth={1.75} />}
    </button>
  );
};

export default ThemeToggle;
