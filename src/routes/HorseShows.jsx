import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import show_01_highRes from '../images/shows/shows_1_high_res.jpg';
import show_02_highRes from '../images/shows/shows_2_high_res.jpg';
import show_03_highRes from '../images/shows/shows_3_high_res.jpg';
import show_04_highRes from '../images/shows/shows_4_high_res.jpg';
import show_05_highRes from '../images/shows/shows_5_high_res.jpg';
import show_01_lowRes from '../images/shows/shows_1_low_res.jpg';
import show_02_lowRes from '../images/shows/shows_2_low_res.jpg';
import show_03_lowRes from '../images/shows/shows_3_low_res.jpg';
import show_04_lowRes from '../images/shows/shows_4_low_res.jpg';
import show_05_lowRes from '../images/shows/shows_5_low_res.jpg';
import Image from '../components/Image';
import Carousel from '../components/Carousel';

const HorseShows = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default HorseShows;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	return (
		<DesktopDiv>
			<div className='carousel'>
				<Carousel
					lowRes={[
						show_01_lowRes,
						show_02_lowRes,
						show_03_lowRes,
						show_04_lowRes,
						show_05_lowRes,
					]}
					highRes={[
						show_01_highRes,
						show_02_highRes,
						show_03_highRes,
						show_04_highRes,
						show_05_highRes,
					]}
					length={5}
				/>
			</div>
			<div className='intro'>
				Explore past events, witness memorable moments, and experience the dynamic spirit of
				our equestrian community. Whether you're a passionate enthusiast or a newcomer to
				the world of horse shows, this page is your window into the captivating world of
				equestrian sports. Dive in and discover the beauty of horsemanship in action.
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 2em;

	& > .intro {
		width: 35%;
		margin: 2.5% 0;
		text-align: justify;
		padding: 1em;
	}

	& > .carousel {
		width: 60%;
		height: 100%;
		border: 2px solid black;
		position: relative;

		& > .img-div {
			height: 70vh;
			width: 100%;
			background-color: rgb(18, 17, 31);

			& > .left {
				position: absolute;
				height: 100%;
				width: 25px;
				left: 0;
				background-color: rgb(18, 17, 31);
				color: white;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				z-index: 3;
				transition: all 500ms;

				&:hover {
					width: 40px;
					background-color: rgb(37, 39, 69);
					transition: all 200ms;
				}
				&:active {
					transition: all 100ms;
					width: 20px;
				}
			}
			& > .right {
				position: absolute;
				height: 100%;
				width: 25px;
				right: 0;
				background-color: rgb(18, 17, 31);
				color: white;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				z-index: 3;
				transition: all 500ms;

				&:hover {
					width: 40px;
					background-color: rgb(37, 39, 69);
					transition: all 200ms;
				}

				&:active {
					transition: all 100ms;
					width: 20px;
				}
			}
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const styleWrapper = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		zIndex: '3',
		overflow: 'hidden',
	};

	const styleImage = {
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		maxHeight: '100%',
		maxWidth: '200%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
	};

	return (
		<MobileDiv>
			<div className='intro'>
				Explore past events, witness memorable moments, and experience the dynamic spirit of
				our equestrian community. Whether you're a passionate enthusiast or a newcomer to
				the world of horse shows, this page is your window into the captivating world of
				equestrian sports. Dive in and discover the beauty of horsemanship in action.
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_01_lowRes}
						highResSrc={show_01_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_02_lowRes}
						highResSrc={show_02_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_03_lowRes}
						highResSrc={show_03_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_04_lowRes}
						highResSrc={show_04_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_05_lowRes}
						highResSrc={show_05_highRes}
					/>
				</div>
				<div className='bottom-space' />
			</div>
		</MobileDiv>
	);
};

export const MobileDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	line-height: 130%;

	& > .intro {
		margin: 5% 5% 0;
		text-align: justify;
		padding: 0.5em;
	}

	& > .img-container {
		width: 95%;
		height: 50vh;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;

		& > .img-wrapper {
			width: 100%;
			height: 50vh;
			z-index: 1;
			position: relative;
			margin: 0.5em 0;
		}

		& > .bottom-space {
			height: 5%;
			width: 100%;
		}
	}
`;
