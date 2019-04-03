import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
	const [state, setState] = useState(defaultState);

	const id = `use dropdown-${label.replace(' ', '').toLowerCase()}`;

	const Dropdown = () => {
		return (
			<label htmlFor="animal">
				Animal
				<select
					id={id}
					value={state}
					onChange={event => setState(event.target.value)}
					onBlur={event => setState(event.target.value)}
					disabled={!options.length}
				>
					<option />
					{options.map(selectOption => (
						<option key={selectOption} value={selectOption}>
							{selectOption}
						</option>
					))}
				</select>
			</label>
		);
	};

	return [state, Dropdown, setState];
};

export default useDropdown;
