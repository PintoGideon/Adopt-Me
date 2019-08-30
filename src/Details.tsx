import React, { Component } from 'react';
import pet, { Photo } from '@frontendmasters/pet';
import Carousel from './Carousel';
import ThemeContext from './ThemeContext';
import { navigate, Router, RouteComponentProps } from '@reach/router';
import Modal from './Modal';

class Details extends Component<
	RouteComponentProps<{
		id: string;
	}>
> {
	public state = {
		name: '',
		animal: '',
		media: [] as Photo[],
		breed: '',
		location: '',
		url: '',
		loading: true,
		showModal: false,
		description: ''
	};

	public componentDidMount() {
		if (!this.props.id) {
			navigate('/');
			return;
		}

		pet.animal(+this.props.id).then(({ animal }) => {
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
