import { useContext, createContext } from 'react';

export const ThemeContext = createContext();

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
