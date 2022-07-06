import { useEffect } from 'react';

type Theme = 'light' | 'dark';

export const enableDarkMode = () => {
  document.body.classList.remove('light');
  document.body.classList.add('dark');
  localStorage.setItem('theme', 'dark');
};

export const enableLightMode = () => {
  document.body.classList.remove('dark');
  localStorage.setItem('theme', 'light');
};

export function useCssTheme() {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (!theme) localStorage.setItem('theme', 'light');
    if (theme === 'dark') return enableDarkMode();
  }, []);
}
