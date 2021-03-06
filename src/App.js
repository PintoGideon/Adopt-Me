import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';

const App = () => {
	const themeHook = useState('cyan');

	return (
		<ThemeContext.Provider value={themeHook}>
			<div>
				<header>
					<Link to="/">Adopt Me</Link>
				</header>

				<Router>
					<SearchParams path="/" />
					<Details path="/details/:id" />
				</Router>
			</div>
		</ThemeContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
