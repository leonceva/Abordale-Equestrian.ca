import { useState } from 'react';

const useImageOnLoad = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoad = () => setIsLoaded(true);

	const transitionStyles = {
		lowRes: {
			opacity: isLoaded ? 0 : 1,
			filter: 'blur(2px)',
		},
		highRes: {
			opacity: isLoaded ? 1 : 0,
		},
	};

	return { handleImageLoad, transitionStyles };
};

export default useImageOnLoad;
