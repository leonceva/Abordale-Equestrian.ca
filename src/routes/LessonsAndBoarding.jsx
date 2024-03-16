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
			<div className='lessons'>
				<h4>Lessons</h4>
				<p>
					Abordale Equestrian provides a comprehensive lesson program catering to a wide
					range of riders, from beginners to those at an advanced competitive level, under
					the guidance of Sean Jenkin, an Equestrian Canada Licensed Coach with 25 years
					of experience. Each lesson is structured to last 45 minutes, ensuring ample time
					for personalized instruction and skill development. To maximize the learning
					experience, lessons are offered either privately or as semi-private sessions,
					paired with another rider of a comparable skill level, fostering a supportive
					and conducive learning environment.
				</p>
			</div>
			<div className='boarding'>
				<h4>Boarding</h4>
				<p>
					Abordale Equestrian is dedicated to providing top-notch care for your horses,
					offering both full- service indoor and outdoor boarding options to meet a
					variety of needs.
				</p>
				<p>
					<span style={{ fontWeight: '900', textDecoration: 'underline' }}>
						Our full-service indoor board
					</span>{' '}
					includes daily water, hay, and grain feedings twice a day, along with blanketing
					and booting services as needed. Each horse enjoys regular turnout to ensure
					their well-being, and an individualized feed plan is crafted to meet their
					specific nutritional requirements. We also take care of administering any
					supplements and medications provided by the owner and will bring in your horse
					for veterinary, farrier, and other scheduled appointments, ensuring they receive
					all necessary care without any inconvenience to you.
				</p>
				<p>
					For those opting for our outdoor{' '}
					<span style={{ fontWeight: '900', textDecoration: 'underline' }}>
						boarding option,
					</span>{' '}
					we provide comprehensive care that includes daily access to water, hay, and a
					grain feeding once a day. Each horse benefits from a personalized feed plan
					designed to meet their unique nutritional needs, and we ensure the
					administration of any supplements and medications provided by the owner. When it
					comes to veterinary, farrier, or other scheduled appointments, we offer the
					convenience of bringing your horse in from the paddock to prepare them for their
					appointment.
				</p>
				<p>
					Please be aware that although we gladly assist with vet and farrier appointments
					by bringing your horse in, should there be a need for us to hold your horse
					during these appointments, this service is offered at an additional cost. This
					ensures that your horse receives the attentive care it requires, while also
					providing you with the flexibility you seek.
				</p>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	min-width: 70vw;
	width: 100%;
	height: min-content;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 2em;
	flex-wrap: wrap;

	& > .lessons {
		width: 35%;
		margin: 2.5% 0;
		text-align: justify;
		padding: 1em;
	}

	& > .boarding {
		width: 100%;
		text-align: justify;
		padding: 1em;
		margin-bottom: 2.5%;
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
				<h4>Lessons</h4>
				<p>
					Abordale Equestrian provides a comprehensive lesson program catering to a wide
					range of riders, from beginners to those at an advanced competitive level, under
					the guidance of Sean Jenkin, an Equestrian Canada Licensed Coach with 25 years
					of experience. Each lesson is structured to last 45 minutes, ensuring ample time
					for personalized instruction and skill development. To maximize the learning
					experience, lessons are offered either privately or as semi-private sessions,
					paired with another rider of a comparable skill level, fostering a supportive
					and conducive learning environment.
				</p>
				<h4>Boarding</h4>
				<p>
					Abordale Equestrian is dedicated to providing top-notch care for your horses,
					offering both full- service indoor and outdoor boarding options to meet a
					variety of needs.
				</p>
				<p>
					<span style={{ fontWeight: '900', textDecoration: 'underline' }}>
						Our full-service indoor board
					</span>{' '}
					includes daily water, hay, and grain feedings twice a day, along with blanketing
					and booting services as needed. Each horse enjoys regular turnout to ensure
					their well-being, and an individualized feed plan is crafted to meet their
					specific nutritional requirements. We also take care of administering any
					supplements and medications provided by the owner and will bring in your horse
					for veterinary, farrier, and other scheduled appointments, ensuring they receive
					all necessary care without any inconvenience to you.
				</p>
				<p>
					For those opting for our outdoor{' '}
					<span style={{ fontWeight: '900', textDecoration: 'underline' }}>
						boarding option,
					</span>{' '}
					we provide comprehensive care that includes daily access to water, hay, and a
					grain feeding once a day. Each horse benefits from a personalized feed plan
					designed to meet their unique nutritional needs, and we ensure the
					administration of any supplements and medications provided by the owner. When it
					comes to veterinary, farrier, or other scheduled appointments, we offer the
					convenience of bringing your horse in from the paddock to prepare them for their
					appointment.
				</p>
				<p>
					Please be aware that although we gladly assist with vet and farrier appointments
					by bringing your horse in, should there be a need for us to hold your horse
					during these appointments, this service is offered at an additional cost. This
					ensures that your horse receives the attentive care it requires, while also
					providing you with the flexibility you seek.
				</p>
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
