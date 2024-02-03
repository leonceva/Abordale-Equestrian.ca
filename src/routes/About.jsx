import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import sean_img_highRes from '../images/about/about_sean_high_res.jpg';
import brandon_img_highRes from '../images/about/about_brandon_high_res.jpg';
import sean_img_lowRes from '../images/about/about_sean_low_res.jpg';
import brandon_img_lowRes from '../images/about/about_brandon_low_res.jpg';
import Image from '../components/Image';

const About = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default About;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	const styleWrapper = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		overflowX: 'hidden',
	};

	const styleImage = {
		position: 'absolute',
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
		border: '2px solid #333',
	};

	return (
		<DesktopDiv>
			<div className='staff'>
				<div className='staff-container'>
					<div className='bio-container'>
						<div className='image'>
							<Image
								styleWrapper={styleWrapper}
								styleImage={styleImage}
								lowResSrc={sean_img_lowRes}
								highResSrc={sean_img_highRes}
							/>
						</div>
						<h2>Sean Jenkin</h2>
						<h3>Your Versatile Equestrian Expert</h3>
						<p className='bio'>
							With a deep passion for equine excellence, Sean stands as a versatile
							equestrian professional specializing in eventing, hunter/jumper, and
							dressage. He brings years of dedicated experience to the arena,
							seamlessly blending expertise across disciplines. As a seasoned trainer,
							Sean has honed a unique approach that not only focuses on technical
							precision but also nurtures the unique bond between rider and horse.
							With a commitment to cultivating well-rounded equestrians, he tailors
							training programs to suit riders of all levels, from aspiring novices to
							seasoned competitors. Embark on a transformative journey with Sean,
							where the artistry of dressage, the precision of hunter/jumper, and the
							exhilaration of eventing converge into a holistic and enriching
							equestrian experience. Whether you're aiming for the podium or seeking a
							harmonious connection with your equine partner, Sean is here to guide
							you every stride of the way.
						</p>
					</div>
				</div>
				<div className='staff-container'>
					<div className='bio-container'>
						<div className='image'>
							<Image
								styleWrapper={styleWrapper}
								styleImage={styleImage}
								lowResSrc={brandon_img_lowRes}
								highResSrc={brandon_img_highRes}
							/>
						</div>
						<h2>Brandon Fehér</h2>
						<h3>Your Guardian of Equine Comfort and Care</h3>
						<p className='bio'>
							As the dedicated Barn Manager at Abordale, Brandon brings a wealth of
							experience and passion to the heart of our facility. With a keen eye for
							detail and a deep love for horses, he oversees the daily operations of
							our stables, ensuring the well-being, comfort, and health of every
							equine resident. Brandon is not only a skilled organizer and caretaker
							but also a friendly face for our equestrian community. From coordinating
							feeding schedules to maintaining pristine facilities, he plays a pivotal
							role in creating a nurturing environment where both horses and their
							human companions thrive. Trust Brandon to uphold the highest standards
							of care, making Abordale a home where horses receive the attention and
							devotion they deserve.
						</p>
					</div>
				</div>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	& > .staff {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin-top: 2.5%;

		& > .staff-container {
			width: 100%;
			margin-bottom: 2.5%;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
			border: 2px solid black;
			background-color: rgba(220, 220, 220, 0.8);

			& > .bio-container {
				padding: 0 2.5%;
				height: 100%;
				flex: 1;
				overflow-y: auto;

				& > .image {
					aspect-ratio: 1/1;
					width: calc(min(60%, 60vh));
					float: left;
					position: relative;
					margin: 0.5em 0;
				}

				& > h2,
				h3 {
					width: 100%;
					text-align: left;
					margin: 0.5em 0 0;
				}

				& > .bio {
					line-height: 125%;
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
		overflowX: 'hidden',
	};

	const styleImage = {
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
		border: '2px solid #333',
	};

	return (
		<MobileDiv>
			<div className='staff'>
				<div className='staff-container'>
					<h2>Sean Jenkin</h2>
					<h3>Your Versatile Equestrian Expert</h3>
					<div className='image'>
						<Image
							styleWrapper={styleWrapper}
							styleImage={styleImage}
							lowResSrc={sean_img_lowRes}
							highResSrc={sean_img_highRes}
						/>
					</div>
					<p className='bio'>
						He brings years of dedicated experience to the arena, seamlessly blending
						expertise across disciplines. As a seasoned trainer, Sean has honed a unique
						approach that not only focuses on technical precision but also nurtures the
						unique bond between rider and horse. With a commitment to cultivating
						well-rounded equestrians, he tailors training programs to suit riders of all
						levels, from aspiring novices to seasoned competitors. Embark on a
						transformative journey with Sean, where the artistry of dressage, the
						precision of hunter/jumper, and the exhilaration of eventing converge into a
						holistic and enriching equestrian experience. Whether you're aiming for the
						podium or seeking a harmonious connection with your equine partner, Sean is
						here to guide you every stride of the way.
					</p>
				</div>
				<div className='staff-container'>
					<h2>Brandon Fehér</h2>
					<h3>Your Guardian of Equine Comfort and Care</h3>
					<div className='image'>
						<Image
							styleWrapper={styleWrapper}
							styleImage={styleImage}
							lowResSrc={brandon_img_lowRes}
							highResSrc={brandon_img_highRes}
						/>
					</div>
					<p className='bio'>
						As the dedicated Barn Manager at Abordale, Brandon brings a wealth of
						experience and passion to the heart of our facility. With a keen eye for
						detail and a deep love for horses, he oversees the daily operations of our
						stables, ensuring the well-being, comfort, and health of every equine
						resident. Brandon is not only a skilled organizer and caretaker but also a
						friendly face for our equestrian community. From coordinating feeding
						schedules to maintaining pristine facilities, he plays a pivotal role in
						creating a nurturing environment where both horses and their human
						companions thrive. Trust Brandon to uphold the highest standards of care,
						making Abordale a home where horses receive the attention and devotion they
						deserve.
					</p>
				</div>
			</div>
		</MobileDiv>
	);
};

export const MobileDiv = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;

	& > .staff {
		width: 95%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin: 2.5% 2.5% 0;

		& > .staff-container {
			width: 95%;
			height: max-content;
			border: 2px solid black;
			background-color: rgba(220, 220, 220, 0.8);
			margin-bottom: 5%;
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;

			& > .image {
				width: 100%;
				height: 50vh;
				position: relative;
			}

			& > h2,
			h3 {
				padding: 0.5em;
				text-align: center;
				margin: 0;
			}

			& > .bio {
				padding: 0 2.5%;
				text-align: justify;
			}
		}
	}
`;
