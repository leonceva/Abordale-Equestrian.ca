const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

export const Map = (props) => {
	const size = props.size;

	return (
		<>
			<iframe
				title='map'
				width={size}
				height={size}
				loading='lazy'
				allowFullScreen
				frameBorder='0'
				style={{ border: '2px solid black' }}
				src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt8Zmeav5zUwRP_XLG5df0Mw&key=${apiKey}&zoom=15`}
			></iframe>
		</>
	);
};

export default Map;
