import { createContext } from 'react';

// We pass in a hook and a updater function.

const ThemeContext = createContext<[string, (theme: string) => void]>([
	'peru',
	() => {}
]);

export default ThemeContext;
