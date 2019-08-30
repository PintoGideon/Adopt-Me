import React, { lazy, Component } from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ThemeContext from './ThemeContext';
import { navigate } from '@reach/router';

const Modal = lazy(() => import('./Modal'));

class Details extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			showModal: false
		};
	}
	componentDidMount() {
		pet.animal(this.props.id).then(({ animal }) => {
			this.setState({
				url: animal.url,
				name: animal.name,
				animal: animal.type,
				location: `${animal.contact.address.city}, ${
					animal.contact.address.state
				}`,
				description: animal.description,
				breed: animal.breeds.primary,
				loading: false
			});
		}, console.error);
	}

	toggleModal = () =>
		this.setState({
			showModal: !this.state.showModal
		});

	adopt = () => navigate(this.state.url);

	render() {
		if (this.state.loading) {
			return <h1>Loading...</h1>;
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
				<h1>{name}</h1>
				<h2>{`${animal}-${breed}=${location}`}</h2>
				<ThemeContext.Consumer>
					{themeHook => (
						<button
							onClick={this.toggleModal}
							style={{ backgroundColor: themeHook[0] }}
						>
							Adopt {name}
						</button>
					)}
				</ThemeContext.Consumer>

				<p>{description}</p>
				{showModal ? (
					<Modal>
						<h1>Would you like to adopt me?</h1>
						<div className="buttons">
							<button onClick={this.adopt}>Yes</button>
							<button onClick={this.toggleModal}>No, I m a monster</button>
						</div>
					</Modal>
				) : null}
			</div>
		);
	}
}

export default Details;
