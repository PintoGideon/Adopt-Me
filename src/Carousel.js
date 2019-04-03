import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class Carousel extends Component {
	state = {
		photos: [],
		active: 0
	};

	static getDerivedStateFromProps({ media }) {
		let photos = [];

		if (media && media.photos && media.photos.photo) {
			photos = media.photos.photo.filter(photo => photo['@size'] === 'pn');
		}
		return { photos };
	}

	handleClick = e => {
		this.setState({
			active: +e.target.dataset.index
		});
	};

	render() {
		const { photos, active } = this.state;

		return (
			<ErrorBoundary>
				<div className="carousel">
					<img src={photos[active].value} alt="animal" />
					<div className="carousel-smaller">
						{photos.map((photo, index) => (
							//eslint-disable-next-line
							<img
								src={photo.value}
								key={photo.value}
								className={index === active ? 'active' : ''}
								alt="animal thumbnail"
								onClick={this.handleClick}
								data-index={index}
							/>
						))}
					</div>
				</div>
			</ErrorBoundary>
		);
	}
}

export default Carousel;
