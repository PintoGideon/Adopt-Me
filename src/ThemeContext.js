import { createContext } from 'react';

// We pass in a hook and a updater function.

const ThemeContext = createContext(['peru'], () => {});

export default ThemeContext;
