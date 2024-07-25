import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import show_01_highRes from '../images/shows/shows_1_high_res.jpg';
import show_02_highRes from '../images/shows/shows_2_high_res.jpg';
import show_03_highRes from '../images/shows/shows_3_high_res.jpg';
import show_04_highRes from '../images/shows/shows_4_high_res.jpg';
import show_05_highRes from '../images/shows/shows_5_high_res.jpg';
import show_06_highRes from '../images/shows/shows_6_high_res.jpg';
import show_01_lowRes from '../images/shows/shows_1_low_res.jpg';
import show_02_lowRes from '../images/shows/shows_2_low_res.jpg';
import show_03_lowRes from '../images/shows/shows_3_low_res.jpg';
import show_04_lowRes from '../images/shows/shows_4_low_res.jpg';
import show_05_lowRes from '../images/shows/shows_5_low_res.jpg';
import show_06_lowRes from '../images/shows/shows_6_low_res.jpg';
import Image from '../components/Image';
import Carousel from '../components/Carousel';
import devocoux_logo from '../images/devocoux-logo.png';

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
						show_06_lowRes,
						show_01_lowRes,
						show_02_lowRes,
						show_03_lowRes,
						show_04_lowRes,
						show_05_lowRes,
					]}
					highRes={[
						show_06_highRes,
						show_01_highRes,
						show_02_highRes,
						show_03_highRes,
						show_04_highRes,
						show_05_highRes,
					]}
					length={6}
				/>
			</div>
			<div className='intro'>
				Abordale Equestrian actively participates in hunter/jumper, eventing, and dressage
				horse shows at the Gold, Silver, and Bronze levels, primarily focusing on horse
				shows in the Ottawa area but also extending to competitions in Quebec and other
				venues in Ontario. Our commitment to you and your horse extends far beyond our farm;
				at each show, we ensure your horse receives the utmost care, handling all aspects of
				their needs to ensure they are show-ready and comfortable. Additionally, you will
				benefit from comprehensive coaching for the entire duration of the show, providing
				you with the guidance, support, and expertise needed to perform at your best.
			</div>
			<div className='sponsors'>
				<img
					src={devocoux_logo}
					alt='Devocoux'
				/>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	min-width: 70vw;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	align-items: top;
	margin-top: 2em;

	& > .intro {
		width: 35%;
		@media screen and (max-width: 1100px) {
			width: 100%;
		}
		margin-top: 1em;
		text-align: left;
		padding: 1em;
		align-self: center;
	}

	& > .carousel {
		width: calc(max(300px, 60%));
		height: 70vh;
		@media screen and (max-width: 1100px) {
			width: 80%;
			height: 50vh;
			margin-top: 1em;
		}
		border: 2px solid black;
		position: relative;
		margin-bottom: 1em;

		& > .img-div {
			height: 70vh;
			@media screen and (max-width: 1100px) {
				width: 80%;
				height: 50vh;
			}

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

	& > .sponsors {
		width: 100%;
		padding-bottom: 1em;
		display: flex;
		height: fit-content;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;

		& > img {
			max-width: 50vw;
			max-height: 125px;
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
				Abordale Equestrian actively participates in hunter/jumper, eventing, and dressage
				horse shows at the Gold, Silver, and Bronze levels, primarily focusing on horse
				shows in the Ottawa area but also extending to competitions in Quebec and other
				venues in Ontario. Our commitment to you and your horse extends far beyond our farm;
				at each show, we ensure your horse receives the utmost care, handling all aspects of
				their needs to ensure they are show-ready and comfortable. Additionally, you will
				benefit from comprehensive coaching for the entire duration of the show, providing
				you with the guidance, support, and expertise needed to perform at your best.
			</div>
			<div className='sponsors'>
				<img
					src={devocoux_logo}
					alt='Devocoux'
				/>
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_06_lowRes}
						highResSrc={show_06_highRes}
					/>
				</div>
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

	& > .sponsors {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;

		& > img {
			max-width: calc(min(90vw, 250px));
			max-height: 100px;
		}
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
