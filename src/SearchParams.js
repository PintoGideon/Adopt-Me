import React, { useState, useEffect, useContext } from 'react';
import pf, { ANIMALS } from 'petfinder-client';
import useDropdown from './useDropdown';
import Results from './Results';
import ThemeContext from './ThemeContext';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

const SearchParams = () => {
	const [theme, setTheme] = useContext(ThemeContext);
	const [location, setLocation] = useState('Seattle, WA');
	const [breeds, setBreeds] = useState([]);

	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown, setBreed] = useDropdown('Breed', ' ', breeds);

	const [pets, setPets] = useState([]);

	async function requestPets() {
		const res = await petfinder.pet.find({
			location,
			breed,
			animal,
			output: 'full'
		});

		//This is going to be an array of pets returned from the API

		setPets(
			Array.isArray(res.petfinder.pets.pet)
				? res.petfinder.pets.pet
				: [res.petfinder.pets.pet]
		);
	}

	useEffect(() => {
		setBreeds([]);
		setBreed('');

		petfinder.breed.list({ animal }).then(data => {
			setBreeds(
				Array.isArray(data.petfinder.breeds.breed)
					? data.petfinder.breeds.breed
					: [data.petfinder.breeds.breed]
			);
		});
	}, [animal]);

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
