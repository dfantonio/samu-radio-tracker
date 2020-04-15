const THEME = '@isDarkTheme';
const readTheme = () => localStorage.getItem(THEME) === 'true';
const toggleTheme = () => localStorage.setItem(THEME, !readTheme());

export { readTheme, toggleTheme };
