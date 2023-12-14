import { useState } from 'react';

const useImageOnLoad = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const handleImageLoad = () => setIsLoaded(true);

	const transitionStyles = {
		lowRes: {
			opacity: isLoaded ? 0 : 1,
			filter: 'blur(2px)',
			transition: 'opacity 250ms ease-in 50ms',
		},
		highRes: {
			opacity: isLoaded ? 1 : 0,
			transition: 'opacity 250ms ease-in 50ms',
		},
	};

	return { handleImageLoad, transitionStyles };
};

export default useImageOnLoad;
