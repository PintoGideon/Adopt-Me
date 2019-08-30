import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';
import Details from './Details';
import { Router } from '@reach/router';
import ThemeContext from './ThemeContext';
import Navbar from './Navbar';

const App = () => {
	const themeHook = useState('cyan');

	return (
		<ThemeContext.Provider value={themeHook}>
			<div>
				<Navbar />

				<Router>
					<SearchParams path="/" />
					<Details path="/details/:id" />
				</Router>
			</div>
		</ThemeContext.Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
