import React, {createContext, useState, useContext, ReactNode} from 'react';

import {DarkTheme, LightTheme} from '@commons/ui/theme';

const ThemeContext = createContext({});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const colors = theme === 'light' ? LightTheme : DarkTheme;

  return (
    <ThemeContext.Provider value={{theme, toggleTheme, colors}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
