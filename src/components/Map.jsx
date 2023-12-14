import { useState } from 'react';
import loader from '../images/loader.png';
import styled from 'styled-components';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export const Map = () => {
	// Use to determine the size of the google maps image
	let mapWidth, mapHeight;
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	const [isLoaded, setIsLoaded] = useState(false);

	if (screenWidth < MOBILE_MODE_LIMIT.slice(0, MOBILE_MODE_LIMIT.indexOf('p'))) {
		mapWidth = Math.min(0.8 * screenWidth, 0.7 * screenHeight);
		mapHeight = Math.min(0.8 * screenWidth, 0.7 * screenHeight);
	} else {
		mapWidth = Math.min(0.5 * screenWidth, 0.5 * screenHeight);
		mapHeight = Math.min(0.5 * screenWidth, 0.5 * screenHeight);
	}

	return (
		<>
			<iframe
				title='map'
				loading='lazy'
				width='100%'
				height='100%'
				frameBorder='0'
				style={{
					position: 'absolute',
					opacity: `${isLoaded ? '1' : '0'}`,
				}}
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt8Zmeav5zUwRP_XLG5df0Mw&key=${apiKey}&zoom=13`}
				onLoad={() => setIsLoaded(true)}
			/>
			{!isLoaded && (
				<ImgDiv>
					<p>Loading Map..</p>
					<img
						src={loader}
						alt='loader'
						style={{
							width: `${mapWidth * 0.25}px`,
							height: `${mapHeight * 0.25}px`,
							rotate: '',
						}}
					/>
				</ImgDiv>
			)}
		</>
	);
};

export default Map;

export const ImgDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	& > p {
		position: absolute;
		top: 0%;
	}

	& > img {
		animation: rotating 2s linear infinite;
	}

	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;
