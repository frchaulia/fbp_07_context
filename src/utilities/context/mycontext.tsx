import { createContext } from 'react';
import { Themes } from '../themes/mythemes';

type ThemeContextType = {
  theme: keyof Themes;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

export const LevelContext = createContext<number>(0);