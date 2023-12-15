import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import show_photo_01_highRes from '../images/placeholder-horse-shows-01.jpg';
import show_photo_02_highRes from '../images/placeholder-horse-shows-02.jpg';
import show_photo_03_highRes from '../images/placeholder-horse-shows-03.jpg';
import show_photo_01_lowRes from '../images/placeholder-horse-shows-01-lazy.jpg';
import show_photo_02_lowRes from '../images/placeholder-horse-shows-02-lazy.jpg';
import show_photo_03_lowRes from '../images/placeholder-horse-shows-03-lazy.jpg';
import Image from '../components/Image';

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
	const styleWrapper = {
		position: 'relative',
		maxWidth: '50%',
		height: '100%',
		aspectRatio: '1/1',
	};

	const styleImage = {
		position: 'absolute',
		maxHeight: '100%',
		maxWidth: '100%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<DesktopDiv>
			<div className='intro'>
				Explore past events, witness memorable moments, and experience the dynamic spirit of our
				equestrian community. Whether you're a passionate enthusiast or a newcomer to the world of
				horse shows, this page is your window into the captivating world of equestrian sports. Dive
				in and discover the beauty of horsemanship in action.
			</div>
			<div className='photo-container'>
				<div className='wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_photo_01_lowRes}
						highResSrc={show_photo_01_highRes}
					/>
					{/* <img src={show_photo_01_highRes} alt='Show 01' /> */}
					<div className='caption'>
						Grace in motion, this chestnut mare captures the essence of equestrian elegance as she
						soars through the air in a captivating jump. A moment frozen in time, where strength,
						beauty, and skill converge.
					</div>
				</div>
				<div className='wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_photo_02_lowRes}
						highResSrc={show_photo_02_highRes}
					/>
					{/* <img src={show_photo_02_highRes} alt='Show 02' /> */}
					<div className='caption'>
						Armani, showcasing style and finesse in the hunter event arena. A captivating snapshot
						of this exceptional horse navigating the course with grace.
					</div>
				</div>
				<div className='wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_photo_03_lowRes}
						highResSrc={show_photo_03_highRes}
					/>
					{/* <img src={show_photo_03_highRes} alt='Show 03' /> */}
					<div className='caption'>
						Rose, the spirited pony, conquering cross country with boundless energy and
						determination. A picture of courage and agility in the heart of competition.
					</div>
				</div>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	& > .intro {
		margin: 2.5%;
		text-align: justify;
	}

	& > .photo-container {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;

		& > .wrapper {
			width: 100%;
			margin-bottom: 3%;
			height: 55vh;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			position: relative;

			& > img {
				margin-left: 10%;
				width: 40%;
				border: 2px solid black;
			}

			& > .caption {
				width: 35%;
				margin-left: 5%;
				background-color: rgba(11, 13, 37, 0.9);
				padding: 10px;
				color: white;
				line-height: 150%;
				border: solid 2px black;
			}
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const styleWrapper = {
		position: 'relative',
		maxWidth: '100%',
		height: '60vh',
		aspectRatio: '1/1',
	};

	const styleImage = {
		position: 'absolute',
		maxHeight: '100%',
		maxWidth: '100%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<MobileDiv>
			<div className='intro'>
				Explore past events, witness memorable moments, and experience the dynamic spirit of our
				equestrian community. Whether you're a passionate enthusiast or a newcomer to the world of
				horse shows, this page is your window into the captivating world of equestrian sports. Dive
				in and discover the beauty of horsemanship in action.
			</div>
			<div className='photo-container'>
				<div className='wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={show_photo_01_lowRes}
						highResSrc={show_photo_01_highRes}
					/>
					{/* <img src={show_photo_01_highRes} alt='Show 01' /> */}
					<div className='caption'>
						Grace in motion, this chestnut mare captures the essence of equestrian elegance as she
						soars through the air in a captivating jump. A moment frozen in time, where strength,
						beauty, and skill converge.
					</div>
				</div>
				<div className='wrapper'>
					<img src={show_photo_02_highRes} alt='Show 01' />
					<div className='caption'>
						Armani, showcasing style and finesse in the hunter event arena. A captivating snapshot
						of this exceptional horse navigating the course with grace.
					</div>
				</div>
				<div className='wrapper'>
					<img src={show_photo_03_highRes} alt='Show 03' />
					<div className='caption'>
						Rose, the spirited pony, conquering cross country with boundless energy and
						determination. A picture of courage and agility in the heart of competition.
					</div>
				</div>
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
		margin: 5%;
		text-align: justify;
	}

	& > .photo-container {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;

		& > .wrapper {
			width: 90%;
			height: fit-content;
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;
			position: relative;
			margin-bottom: 5%;

			& > img {
				max-width: 100%;
				max-height: 70vh;
				border: 2px solid black;
				z-index: 1;
			}

			& > .caption {
				width: 90%;
				bottom: 0%;
				z-index: 2;
				background-color: rgba(11, 13, 37, 0.8);
				color: white;
				padding: 2.5% 5%;
				border: solid black;
				border-width: 0 2px 2px;
			}
		}
	}
`;
