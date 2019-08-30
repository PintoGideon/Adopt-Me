import React, { useState, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

import { Router, Link } from '@reach/router';
import ThemeContext from './ThemeContext';

//Dynamically loading the module Details.
const Details = lazy(() => import('./Details'));

const App = () => {
	const themeHook = useState('cyan');

	return (
		<ThemeContext.Provider value={themeHook}>
			<div>
				<header>
					<Link to="/">Adopt Me</Link>
				</header>
				<Suspense fallback={<h1>Loading route....</h1>}>
					<Router>
						<SearchParams path="/" />
						<Details path="/details/:id" />
					</Router>
				</Suspense>
			</div>
		</ThemeContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
