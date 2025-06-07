import { useState, useEffect } from 'react';

export function useTheme() {
  const getInitialTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
