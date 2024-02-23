import { useState } from 'react';

type Theme = 'light' | 'dark';

const updateThemeOnHtmlEl = ({ theme }: { theme: Theme }) => {
  const htmlElement = document.querySelector('html');
  if (htmlElement) {
    htmlElement.setAttribute('data-theme', theme);
  }
};
export const getSystemTheme = (): Theme => {
  const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  console.log('theme', theme);
  return theme;
};

const useTheme = () => {
  const [theme, setTheme] = useState('light');

  const setLocalstorageTheme = (theme: Theme) => {
    localStorage.setItem('theme', theme);
    updateThemeOnHtmlEl({ theme });
  };
  const getLocalstorageTheme = () => {
    return localStorage.getItem('theme') as Theme;
  };

  const updateTheme = (theme: Theme) => {
    setTheme(theme);
    setLocalstorageTheme(theme);
  };

  return { setLocalstorageTheme, getLocalstorageTheme, updateTheme, theme };
};

export default useTheme;
