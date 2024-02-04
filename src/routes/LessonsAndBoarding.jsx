import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import Image from '../components/Image';
import Carousel from '../components/Carousel';
import lessons_01_highRes from '../images/lessons/lessons_1_high_res.jpg';
import lessons_02_highRes from '../images/lessons/lessons_2_high_res.jpg';
import lessons_03_highRes from '../images/lessons/lessons_3_high_res.jpg';
import lessons_04_highRes from '../images/lessons/lessons_4_high_res.jpg';
import lessons_05_highRes from '../images/lessons/lessons_5_high_res.jpg';
import lessons_01_lowRes from '../images/lessons/lessons_1_low_res.jpg';
import lessons_02_lowRes from '../images/lessons/lessons_2_low_res.jpg';
import lessons_03_lowRes from '../images/lessons/lessons_3_low_res.jpg';
import lessons_04_lowRes from '../images/lessons/lessons_4_low_res.jpg';
import lessons_05_lowRes from '../images/lessons/lessons_5_low_res.jpg';

const LessonsAndBoarding = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default LessonsAndBoarding;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	return (
		<DesktopDiv>
			<div className='carousel'>
				<Carousel
					lowRes={[
						lessons_01_lowRes,
						lessons_02_lowRes,
						lessons_03_lowRes,
						lessons_04_lowRes,
						lessons_05_lowRes,
					]}
					highRes={[
						lessons_01_highRes,
						lessons_02_highRes,
						lessons_03_highRes,
						lessons_04_highRes,
						lessons_05_highRes,
					]}
					length={5}
				/>
			</div>
			<div className='intro'>
				<p>
					Explore equestrian excellence with our tailored lessons and boarding options.
					Our instructors cater to all levels, forging a meaningful connection between
					riders and horses. Our boarding facilities prioritize the well-being of your
					equine companions, providing a secure and nurturing environment. Join us for a
					journey into the timeless beauty of horse riding and companionship.
				</p>
				<h3 className='start'>
					Contact us for details regarding boarding or to book your first lesson. We look
					forward to riding with you!
				</h3>
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
				<p>
					Explore equestrian excellence with our tailored lessons and boarding options.
					Our instructors cater to all levels, forging a meaningful connection between
					riders and horses. Our boarding facilities prioritize the well-being of your
					equine companions, providing a secure and nurturing environment. Join us for a
					journey into the timeless beauty of horse riding and companionship.
				</p>
				<h3 className='start'>
					Contact us for details regarding boarding or to book your first lesson. We look
					forward to riding with you!
				</h3>
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={lessons_01_lowRes}
						highResSrc={lessons_01_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={lessons_02_lowRes}
						highResSrc={lessons_02_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={lessons_03_lowRes}
						highResSrc={lessons_03_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={lessons_04_lowRes}
						highResSrc={lessons_04_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={lessons_05_lowRes}
						highResSrc={lessons_05_highRes}
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
