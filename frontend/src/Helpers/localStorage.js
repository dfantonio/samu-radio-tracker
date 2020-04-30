const THEME = '@isDarkTheme';
const readDarkTheme = () => {
  if (!localStorage.getItem(THEME)) return true;
  return localStorage.getItem(THEME) === 'true';
};

const toggleTheme = () => localStorage.setItem(THEME, !readDarkTheme());

export { readDarkTheme, toggleTheme };
