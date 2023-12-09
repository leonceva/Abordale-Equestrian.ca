import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import sean_img from '../images/placeholder-sean-01.jpg';
import brandon_img from '../images/placeholder-brandon-01.jpg';

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
	return (
		<DesktopDiv>
			<div className='intro-message'>
				Curious about what makes us tick? Before we get into the nitty-gritty of our awesome team,
				let's spill the beans on why we're so crazy about horses. We're all about excellence, making
				sure our four-legged friends are living their best lives, and building a community that's as
				tight-knit as a family. So, buckle up and get ready to peek behind the curtain at what makes
				us who we are, a bunch of folks who just love hanging out with horses.
			</div>
			<div className='staff'>
				<div className='staff-container'>
					<img src={sean_img} alt='Sean Jenkin' />
					<div className='bio-container'>
						<h2>Sean Jenkin</h2>
						<h3>Your Versatile Equestrian Expert</h3>
						<p className='bio'>
							With a deep passion for equine excellence, Sean stands as a versatile equestrian
							professional specializing in eventing, hunter/jumper, and dressage. He brings years of
							dedicated experience to the arena, seamlessly blending expertise across disciplines.
							As a seasoned trainer, Sean has honed a unique approach that not only focuses on
							technical precision but also nurtures the unique bond between rider and horse. With a
							commitment to cultivating well-rounded equestrians, he tailors training programs to
							suit riders of all levels, from aspiring novices to seasoned competitors. Embark on a
							transformative journey with Sean, where the artistry of dressage, the precision of
							hunter/jumper, and the exhilaration of eventing converge into a holistic and enriching
							equestrian experience. Whether you're aiming for the podium or seeking a harmonious
							connection with your equine partner, Sean is here to guide you every stride of the
							way.
						</p>
					</div>
				</div>
				<div className='staff-container'>
					<img src={brandon_img} alt='Brandon Fehér' />
					<div className='bio-container'>
						<h2>Brandon Fehér</h2>
						<h3>Your Guardian of Equine Comfort and Care</h3>
						<p className='bio'>
							As the dedicated Barn Manager at Abordale, Brandon brings a wealth of experience and
							passion to the heart of our facility. With a keen eye for detail and a deep love for
							horses, he oversees the daily operations of our stables, ensuring the well-being,
							comfort, and health of every equine resident. Brandon is not only a skilled organizer
							and caretaker but also a friendly face for our equestrian community. From coordinating
							feeding schedules to maintaining pristine facilities, he plays a pivotal role in
							creating a nurturing environment where both horses and their human companions thrive.
							Trust Brandon to uphold the highest standards of care, making Abordale a home where
							horses receive the attention and devotion they deserve.
						</p>
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

	& > .intro-message {
		margin-top: 2.5%;
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
			height: 50vh;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
			border: solid black;
			border-width: 2px 2px 2px 0;
			background-color: rgba(220, 220, 220, 0.8);

			& > img {
				max-height: 100%;
				max-width: 50%;
				border: 2px solid black;
			}

			& > .bio-container {
				padding: 0 2.5%;
				height: 100%;
				flex: 1;
				overflow-y: auto;

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
	return (
		<MobileDiv>
			<div className='intro-message'>
				Curious about what makes us tick? Before we get into the nitty-gritty of our awesome team,
				let's spill the beans on why we're so crazy about horses. We're all about excellence, making
				sure our four-legged friends are living their best lives, and building a community that's as
				tight-knit as a family. So, buckle up and get ready to peek behind the curtain at what makes
				us who we are, a bunch of folks who just love hanging out with horses.
			</div>
			<div className='staff'>
				<div className='staff-container'>
					<div className='img-container'>
						<img src={sean_img} alt='Sean Jenkin' />
					</div>
					<h2>Sean Jenkin</h2>
					<h3>Your Versatile Equestrian Expert</h3>
					<p className='bio'>
						With a deep passion for equine excellence, Sean stands as a versatile equestrian
						professional specializing in eventing, hunter/jumper, and dressage. He brings years of
						dedicated experience to the arena, seamlessly blending expertise across disciplines. As
						a seasoned trainer, Sean has honed a unique approach that not only focuses on technical
						precision but also nurtures the unique bond between rider and horse. With a commitment
						to cultivating well-rounded equestrians, he tailors training programs to suit riders of
						all levels, from aspiring novices to seasoned competitors. Embark on a transformative
						journey with Sean, where the artistry of dressage, the precision of hunter/jumper, and
						the exhilaration of eventing converge into a holistic and enriching equestrian
						experience. Whether you're aiming for the podium or seeking a harmonious connection with
						your equine partner, Sean is here to guide you every stride of the way.
					</p>
				</div>
				<div className='staff-container'>
					<div className='img-container'>
						<img src={brandon_img} alt='Brandon Fehér' />
					</div>
					<h2>Brandon Fehér</h2>
					<h3>Your Guardian of Equine Comfort and Care</h3>
					<p className='bio'>
						As the dedicated Barn Manager at Abordale, Brandon brings a wealth of experience and
						passion to the heart of our facility. With a keen eye for detail and a deep love for
						horses, he oversees the daily operations of our stables, ensuring the well-being,
						comfort, and health of every equine resident. Brandon is not only a skilled organizer
						and caretaker but also a friendly face for our equestrian community. From coordinating
						feeding schedules to maintaining pristine facilities, he plays a pivotal role in
						creating a nurturing environment where both horses and their human companions thrive.
						Trust Brandon to uphold the highest standards of care, making Abordale a home where
						horses receive the attention and devotion they deserve.
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
		margin: 2.5%;
	}

	& > .staff {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin: 0 2.5%;

		& > .staff-container {
			width: 95%;
			max-height: 70vh;
			border: 2px solid black;
			background-color: rgba(220, 220, 220, 0.8);
			overflow-y: auto;
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
