import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { Photo } from '@frontendmasters/pet';

interface IProps {
	media: Photo[];
}

interface IState {
	active: number;
	photos: string[];
}

class Carousel extends Component<IProps, IState> {
	public state = {
		photos: [],
		active: 0
	};

	static getDerivedStateFromProps({ media }: IProps) {
		let photos = ['http://placecorgi.com/600/600'];

		if (media.length) {
			photos = media.map(({ large }) => large);
		}
		return { photos };
	}

	public handleClick = (e: React.MouseEvent<HTMLElement>) => {
		if (!(e.target instanceof HTMLElement)) {
			return;
		}

		if (e.target.dataset.index) {
			this.setState({
				active: +e.target.dataset.index
			});
		}
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
								src={photo}
								key={photo}
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
