import React, {
	useState,
	useEffect,
	useContext,
	FunctionComponent
} from 'react';
import pet, { ANIMALS, Animal } from '@frontendmasters/pet';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';
import { RouteComponentProps } from '@reach/router';

const SearchParams: FunctionComponent<RouteComponentProps> = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	const [location, setLocation] = useState('Seattle, WA');

	const [breeds, setBreeds] = useState([] as string[]);

	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown('Breed', ' ', breeds);

	const [pets, setPets] = useState([] as Animal[]);

	async function requestPets() {
		const { animals } = await pet.animals({
			location,
			breed,
			type: animal
		});

		//This is going to be an array of pets returned from the API

		setPets(animals || []);
	}

	useEffect(() => {
		setBreeds([]);
		setBreed('');

		pet.breeds(animal).then(({ breeds }) => {
			const breedStrings = breeds.map(({ name }) => name);
			setBreeds(breedStrings);
		}, console.error);
	}, [animal, setBreed, setBreeds]);

	return (
		<div className="search-params">
			<form
				action=""
				onSubmit={event => {
					event.preventDefault();
					requestPets();
				}}
			>
				<label htmlFor="location">
					Location
					<input
						onChange={event => setLocation(event.target.value)}
						id="location"
						value={location}
						placeholder="location"
					/>
				</label>
				<AnimalDropdown />
				<BreedDropdown />
				<label htmlFor="theme">
					Theme
					<select
						id="theme"
						value={theme}
						onChange={event => setTheme(event.target.value)}
						onBlur={event => setTheme(event.target.value)}
					>
						<option value="darkblue">Dark Blue</option>
						<option value="peru">Peru</option>
						<option value="cyan">Cyan</option>
						<option value="Red">Red</option>
					</select>
				</label>

				<button style={{ backgroundColor: theme }}>Submit</button>
			</form>

			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
