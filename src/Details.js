import React, { Component } from 'react';
import pf from 'petfinder-client';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import Modal from './Modal';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

class Details extends Component {
	state = { loading: true, showModal: false };

	componentDidMount() {
		petfinder.pet
			.get({
				output: 'full',
				id: this.props.id
			})
			.then(data => {
				let breed;
				if (Array.isArray(data.petfinder.pet.breeds.breed)) {
					breed = data.petfinder.pet.breeds.breed.join(',');
				} else {
					breed = data.petfinder.pet.breeds.breed;
				}

				this.setState({
					name: data.petfinder.pet.name,
					animal: data.petfinder.pet.animal,
					location: `${data.petfinder.pet.contact.city},${
						data.petfinder.pet.contact.state
					}`,
					description: data.petfinder.pet.description,
					media: data.petfinder.pet.media,
					breed,
					loading: false
				});
			});
	}

	toggleModal = () => this.setState({ showModal: !this.state.showModal });

	render() {
		if (this.state.loading) {
			return <h1>Loading!!</h1>;
		}

		const {
			animal,
			breed,
			location,
			description,
			name,
			media,
			showModal
		} = this.state;

		return (
			<div className="details">
				<Carousel media={media} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed}-${location}`}</h2>
					<ThemeContext.Consumer>
						{theme => (
							<button
								onClick={this.toggleModal}
								style={{ backgroundColor: theme[0] }}
							>
								Adopt {name}
							</button>
						)}
					</ThemeContext.Consumer>
					<p>{description}</p>
				</div>

				{showModal ? (
					<Modal>
						<div>
							<h1>Would you like to adopt {name} ?</h1>
							<div className="buttons">
								<button onClick={this.toggleModal}>Yes</button>
								<button onClick={this.toggleModal}>Hell, Yeah!!</button>
							</div>
						</div>
					</Modal>
				) : null}
			</div>
		);
	}
}

export default function DetailsErrorBoundary(props) {
	return (
		<ErrorBoundary>
			<Details {...props} />
		</ErrorBoundary>
	);
}
