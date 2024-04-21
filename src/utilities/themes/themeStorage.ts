import { Themes } from './mythemes';

export const saveTheme = (theme: keyof Themes) => {
  localStorage.setItem('theme', theme);
};

export const getTheme = (): keyof Themes => {
  const theme = localStorage.getItem('theme') as keyof Themes;
  return theme ? theme : 'light';
};