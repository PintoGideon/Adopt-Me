import React from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors';

const spin = keyframes`
to{transform:rotate(360deg)}
`;

const Navbar = () => {
	return (
		<header>
			css=
			{css`
				background-color: ${colors.primary};
				padding: 15px;
				animation: 1s ${spin} linear infinite;
			`}
			<Link to="/">Adopt me</Link>
			<span role="img" aria-label="logo">
				🐩
			</span>
		</header>
	);
};

export default Navbar;
