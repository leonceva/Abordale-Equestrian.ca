import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import sean_img_highRes from '../images/placeholder-sean-01.jpg';
import brandon_img_highRes from '../images/placeholder-brandon-01.jpg';
import sean_img_lowRes from '../images/placeholder-sean-01-lazy.jpg';
import brandon_img_lowRes from '../images/placeholder-brandon-01-lazy.jpg';
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
		aspectRatio: '1/1',
		width: '100%',
		height: '100%',
		position: 'relative',
	};

	const styleImage = {
		aspectRatio: '1/1',
		width: '100%',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<DesktopDiv>
			{/* <div className='intro-message'>
				Curious about what makes us tick? Before we get into the nitty-gritty of our awesome
				team, let's spill the beans on why we're so crazy about horses. We're all about
				excellence, making sure our four-legged friends are living their best lives, and
				building a community that's as tight-knit as a family. So, buckle up and get ready
				to peek behind the curtain at what makes us who we are, a bunch of folks who just
				love hanging out with horses.
			</div> */}
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

	& > .intro-message {
		margin-top: 2.5%;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 1em;
	}

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
			height: fit-content;
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
					width: calc(min(50%, 50vh));
					float: left;
					margin: 1em 1em 1em 0;
				}

				& > h2,
				h3 {
					width: 100%;
					text-align: left;
					margin: 0;
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
		aspectRatio: '1/1',
		position: 'relative',
		float: 'left',
		width: '45vw',
		margin: '0 2vw 2vw 0',
	};

	const styleImage = {
		aspectRatio: '1/1',
		height: '100%',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<MobileDiv>
			<div className='intro-message'>
				Curious about what makes us tick? Before we get into the nitty-gritty of our awesome
				team, let's spill the beans on why we're so crazy about horses. We're all about
				excellence, making sure our four-legged friends are living their best lives, and
				building a community that's as tight-knit as a family. So, buckle up and get ready
				to peek behind the curtain at what makes us who we are, a bunch of folks who just
				love hanging out with horses.
			</div>
			<div className='staff'>
				<div className='staff-container'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={sean_img_lowRes}
						highResSrc={sean_img_highRes}
					/>
					{/* <div className='img-container'>
						<img src={sean_img_highRes} alt='Sean Jenkin' />
					</div> */}
					<h2>Sean Jenkin</h2>
					<h3>Your Versatile Equestrian Expert</h3>
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
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={brandon_img_lowRes}
						highResSrc={brandon_img_highRes}
					/>
					{/* <div className='img-container'>
						<img src={brandon_img_highRes} alt='Brandon Fehér' />
					</div> */}
					<h2>Brandon Fehér</h2>
					<h3>Your Guardian of Equine Comfort and Care</h3>
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

	& > .intro-message {
		margin: 5%;
		text-align: justify;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 0.5em;
	}

	& > .staff {
		width: 95%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin: 0 2.5%;

		& > .staff-container {
			width: 95%;
			height: max-content;
			border: 2px solid black;
			background-color: rgba(220, 220, 220, 0.8);
			margin-bottom: 5%;

			& > .img-container {
				max-width: 45vw;
				max-height: 45vw;
				display: flex;
				align-items: center;
				justify-content: center;
				float: left;
				margin: 0 2vw 2vw 0;

				& > img {
					max-height: 100%;
					max-width: 100%;
					border: 2px solid black;
					float: left;
				}
			}

			& > h2,
			h3 {
				padding-top: 2.5%;
				padding-right: 2.5%;
				text-align: left;
				margin: 0;
			}

			& > .bio {
				padding: 0 2.5%;
				text-align: justify;
			}
		}
	}
`;
