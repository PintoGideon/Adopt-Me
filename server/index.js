import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { ServerLocation } from '@reach/router';
import App from '../src/App';

import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('dist/index.html').toString();

const parts = html.split('not rendered');

app.use('/dist', express.static('dist'));

app.use((req, res) => {
	const reactMarkup = (
		<ServerLocation url={req.url}>
			<App />
		</ServerLocation>
	);

	res.send(parts[0] + renderToString(reactMarkup) + parts[1]);
});
console.log('Listening on ' + PORT);

app.listen(PORT);
