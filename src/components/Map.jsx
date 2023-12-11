const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;
const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export const Map = () => {
	// Use to determine the size of the google maps image
	let mapWidth, mapHeight;
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;

	if (screenWidth < MOBILE_MODE_LIMIT.slice(0, MOBILE_MODE_LIMIT.indexOf('p'))) {
		mapWidth = Math.min(0.8 * screenWidth, 0.7 * screenHeight);
		mapHeight = Math.min(0.8 * screenWidth, 0.7 * screenHeight);
	} else {
		mapWidth = Math.min(0.5 * screenWidth, 0.5 * screenHeight);
		mapHeight = Math.min(0.5 * screenWidth, 0.5 * screenHeight);
	}

	return (
		<iframe
			title='map'
			width={mapWidth}
			height={mapHeight}
			loading='lazy'
			style={{ border: '2px solid black' }}
			src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt8Zmeav5zUwRP_XLG5df0Mw&key=${apiKey}&zoom=13`}
		></iframe>
	);
};

export default Map;
