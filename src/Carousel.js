// eslint-disable-next-line react-hooks/exhausive-depths
import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';

class Carousel extends Component {
	state = {
		photos: [],
		active: 0
	};

	static getDerivedStateFromProps({ media }) {
		let photos = ['http://placecorgi.com/600/600'];

		if (media.length) {
			photos = media.map(({ large }) => large);
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
					<img src={photos[active]} alt="animal" />
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
