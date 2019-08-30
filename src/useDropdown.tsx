import React, { useState, FunctionComponent, Dispatch } from 'react';

const useDropdown = (
	label: string,
	defaultState: string,
	options: string[]
) => {
	const [state, setState] = useState(defaultState);

	const id = `use dropdown-${label.replace(' ', '').toLowerCase()}`;
	// If label is "Breed of animal" then the id will be breedofanimal.

	const Dropdown: FunctionComponent = () => {
		return (
			<label htmlFor="animal">
				Animal
				<select
					id={id}
					value={state}
					onChange={event => setState(event.target.value)}
					onBlur={event => setState(event.target.value)}
					disabled={options.length === 0}
				>
					<option>All</option>
					{options.map(selectOption => (
						<option key={selectOption} value={selectOption}>
							{selectOption}
						</option>
					))}
				</select>
			</label>
		);
	};

	return [state, Dropdown, setState] as [
		string,
		FunctionComponent,
		Dispatch<string>
	];
};

export default useDropdown;
