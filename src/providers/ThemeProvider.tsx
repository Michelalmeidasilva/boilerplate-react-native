import React, {createContext, useState, useContext, ReactNode} from 'react';

import {DarkTheme, LightTheme} from '@commons/ui/theme';

export interface ThemeProviderValues {
  theme: string;
  toggleTheme: () => void;
  colors: {[key: string]: string};
}
const ThemeContext = createContext({} as ThemeProviderValues);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme: 'light' | 'dark';
}

export const ThemeProvider = ({
  defaultTheme = 'light',
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(defaultTheme); // Default theme is light

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
