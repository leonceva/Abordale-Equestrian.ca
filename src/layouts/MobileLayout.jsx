import styled from 'styled-components';
import background_img_highRes from '../images/stock-01.jpg';
import background_img_lowRes from '../images/stock-01-lazy.jpg';
import { useState } from 'react';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const MobileLayout = (props) => {
	const content = props.content;
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<MobileDiv>
			<div className='background'>
				<img
					src={background_img_lowRes}
					alt='Low Res Background'
					className={`${!isLoaded ? 'show' : 'hide'}`}
				/>
				<img
					src={background_img_highRes}
					alt='High Res Background'
					onLoad={() => {
						setIsLoaded(true);
					}}
					className={`${isLoaded ? 'show' : 'hide'}`}
				/>
			</div>
			<div className='mobile-content'>{content}</div>
		</MobileDiv>
	);
};

export default MobileLayout;

export const MobileDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	position: relative;

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	@media screen and (width: ${MOBILE_MODE_LIMIT}) {
		display: inherit;
		font-size: calc(max(2vh, 2vw));
	}

	& > .background {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;

		& > img {
			object-fit: cover;
		}

		& > .show {
			opacity: 0.25;
			width: 100vw;
			height: 100vh;
			transition: opacity 500ms ease-in 50ms;
		}

		& > .hide {
			opacity: 0;
			width: 0%;
			height: 0%;
			transition: opacity 500ms ease-in 50ms;
		}
	}

	& > .mobile-content {
		width: 100%;
		min-height: calc(100vh - 100px);
		z-index: 2;
		top: 0;
		position: absolute;
	}
`;
