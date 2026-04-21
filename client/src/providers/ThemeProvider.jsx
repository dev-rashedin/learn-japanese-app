import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../hooks/useTheme';

// export const ThemeContext = createContext(null);

const themes = {
  light: {
    colors: {
      primary: 'text-green-heaven',
      background: 'bg-blossom-haze',
      textPrimary: 'text-zen-charcoal',
    },
  },
  dark: {
    colors: {
      primary: 'text-amber-glow',
      background: 'bg-zen-serenity',
      textPrimary: 'text-green-heaven',
    },
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
