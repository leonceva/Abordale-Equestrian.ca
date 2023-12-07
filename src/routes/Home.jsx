import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sean_img from '../images/placeholder-sean-01.jpg';
import brandon_img from '../images/placeholder-brandon-01.jpg';
import facility_left from '../images/placeholder-facility-01.jpg';
import facility_right from '../images/placeholder-facility-02.jpg';
import SocialMediaLink from '../components/SocialMediaLink';

const Home = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Home;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	const navigate = useNavigate();
	return (
		<DesktopDiv>
			<h2>Welcome To Abordale Equestrian</h2>
			<div className='welcome-message'>
				Discover the perfect blend of passion and purpose at Abordale Equestrian. Located just south
				of Stittsville, our premier facility offers top-notch boarding, expert training, and
				enriching riding lessons. Immerse yourself in a community dedicated to the well-being of
				horses and the joy of riding. Explore our state-of-the-art facilities, meet our experienced
				trainers, and embark on an exciting journey where every hoofbeat tells a story. Welcome to
				Abordale Equestrian, where the love for horses knows no bounds. Saddle up and let the
				adventure begin!
			</div>
			<div className='facility'>
				<div className='facility-container'>
					<img src={facility_left} alt='Facility 01' className='left' />
					<div className='description-container'>
						<h3 className='title'>Discover Our Facilities</h3>
						<p className='description'>
							Discover a premier equestrian environment at our state-of-the-art facilities. From
							well-appointed stables to meticulously maintained arenas, our space is designed to
							enhance your riding experience
						</p>
						<span
							className='link button'
							onClick={() => {
								navigate('/facilities');
							}}
						>
							Learn More
						</span>
					</div>
					<img src={facility_right} alt='Facility 02' className='right' />
				</div>
			</div>
			<div className='short-about'>
				<div className='staff-container'>
					<img className='staff-img' src={sean_img} alt='Sean Jenkin' />
					<div className='staff-bio'>
						<h3 className='name'>
							Sean Jenkin - Your Expert in Eventing, Hunter/Jumper, and Dressage
						</h3>
						<p className='bio'>
							Welcome to the world of equestrian excellence with Sean, a seasoned professional
							specializing in eventing, hunter/jumper, and dressage. With a passion for precision
							and a commitment to fostering the rider-horse connection, he tailors training programs
							for all levels of riders.
						</p>
						<span
							className='link button'
							onClick={() => {
								navigate('/about');
							}}
						>
							Read More
						</span>
					</div>
				</div>
				<div className='staff-container'>
					<img src={brandon_img} alt='Brandon Fehér' className='staff-img' />
					<div className='staff-bio'>
						<h3 className='name'>Brandon Fehér - Our Steward of Equine Care</h3>
						<p className='bio'>
							At the helm of Abordale Equestrian, Brandon serves as our dedicated Barn Manager,
							ensuring the optimal care and well-being of our equine companions. With a wealth of
							experience and a passion for horses, he expertly oversees daily operations,
							guaranteeing that every horse receives the highest standard of care.
						</p>
						<span
							className='link button'
							onClick={() => {
								navigate('/about');
							}}
						>
							Read More
						</span>
					</div>
				</div>
			</div>
			<div className='get-started'>
				<div className='get-started-container'>
					<h1>Ready To Start?</h1>
					<span
						className='link button'
						onClick={() => {
							navigate('/lessons-and-boarding');
						}}
					>
						Explore Lessons and Boarding
					</span>
					<div className='contact-info'>
						<h2>Get In Touch</h2>
						<div className='social-media'>
							<SocialMediaLink size='35px' type='instagram' />
							<SocialMediaLink size='35px' type='facebook' />
							<SocialMediaLink size='35px' type='email' />
						</div>
						<div className='email'>abordale.equestrian@gmail.com</div>
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

	& > .welcome-message {
		padding-bottom: 25px;
	}

	& > .facility {
		width: 100%;

		& > .facility-container {
			width: 100%;
			height: max-content;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;

			& > img {
				border: 2px solid black;
				max-width: 30%;
				max-height: 100%;
			}

			& > .left {
				justify-self: start;
			}

			& > .right {
				justify-self: flex-end;
			}

			& > .description-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				flex: 1;

				& > .title {
					margin: 2.5%;
				}

				& > .description {
					text-align: justify;
					margin: 5%;
				}

				& > .link {
					font-weight: bold;
					padding: 5px 10px;
					align-self: start;
					margin-left: 5%;
					margin-bottom: 2.5%;
				}
			}
		}
	}

	& > .short-about {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-top: 10px;

		& > .staff-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: start;
			margin: 10px 0;

			& > .staff-img {
				max-height: 300px;
				max-width: 30%;
				border: 2px solid black;
			}

			& > .staff-bio {
				flex: 1;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin: 1vh 0;

				& > .name {
					align-self: stretch;
					margin: 2.5%;
				}

				& > .bio {
					text-align: justify;
					margin: 2.5%;
				}

				& > .link {
					font-weight: bold;
					align-self: start;
					padding: 5px 10px;
					margin-left: 2.5%;
					margin-bottom: 2.5%;
				}
			}
		}
	}

	& > .get-started {
		width: 100%;

		& > .get-started-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			margin-bottom: 5vh;

			& > h1 {
				height: 100%;
				text-align: center;
				width: 30%;
			}

			& > .link {
				max-width: 25%;
				padding: 5px 10px;
				text-align: center;
				font-weight: bold;
				font-size: calc(min(3vw, 3vh));
			}

			& > .contact-info {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				& > .social-media {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-evenly;
					width: 100%;
					margin-bottom: 5%;
				}

				& > .email {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-evenly;
					width: 100%;
				}
			}
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const navigate = useNavigate();
	return (
		<MobileDiv>
			<h2>Welcome To Abordale Equestrian</h2>
			<div className='welcome-message'>
				Discover the perfect blend of passion and purpose at Abordale Equestrian. Located just south
				of Stittsville, our premier facility offers top-notch boarding, expert training, and
				enriching riding lessons. Immerse yourself in a community dedicated to the well-being of
				horses and the joy of riding. Explore our state-of-the-art facilities, meet our experienced
				trainers, and embark on an exciting journey where every hoofbeat tells a story. Welcome to
				Abordale Equestrian, where the love for horses knows no bounds. Saddle up and let the
				adventure begin!
			</div>
			<div className='facility'>
				<h2>Discover Our Facilities</h2>
				<div className='img-container'>
					<img src={facility_left} alt='Facility 01' />
					<img src={facility_right} alt='Facility 02' />
				</div>
				<div className='description'>
					Discover a premier equestrian environment at our state-of-the-art facilities. From
					well-appointed stables to meticulously maintained arenas, our space is designed to enhance
					your riding experience
				</div>
				<span
					className='link button'
					onClick={() => {
						navigate('/facilities');
					}}
				>
					Learn More
				</span>
			</div>
			<div className='short-about'>
				<div className='staff-container'>
					<img src={sean_img} alt='Sean Jenkin' />
					<div className='name'>
						<h3>Sean Jenkin</h3>
						<h4>Your Expert in Eventing, Hunter/Jumper, and Dressage</h4>
						<span
							className='link button'
							onClick={() => {
								navigate('/about');
							}}
						>
							Read More
						</span>
					</div>
				</div>
				<div className='staff-container'>
					<img src={brandon_img} alt='Brandon Fehér' />
					<div className='name'>
						<h3>Brandon Fehér</h3>
						<h4>Our Steward of Equine Care</h4>
						<span
							className='link button'
							onClick={() => {
								navigate('/about');
							}}
						>
							Read More
						</span>
					</div>
				</div>
			</div>
			<div className='get-started'>
				<div className='get-started-container'>
					<h2>Ready To Start?</h2>
					<div className='right-side'>
						<span className='link button'>Explore Lessons and Boarding</span>
					</div>
				</div>
				<div className='get-started-container'>
					<h2>Get In Touch</h2>
					<div className='right-side'>
						<div className='social-media'>
							<SocialMediaLink size='40px' type='instagram' />
							<SocialMediaLink size='40px' type='facebook' />
							<SocialMediaLink size='40px' type='email' />
						</div>
					</div>
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

	& > h2 {
		text-align: center;
	}

	& > .welcome-message {
		padding: 0 2.5%;
		line-height: 125%;
	}

	& > .facility {
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 5%;

		& > .img-container {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			& > img {
				width: calc(50% - 2vw);
				border: 2px solid black;
			}
		}

		& > .description {
			margin-top: 2.5%;
			width: 95%;
			align-self: center;
		}

		& > .link {
			font-weight: bold;
			padding: 5px 10px;
			align-self: center;
			margin: 2.5% 0;
		}
	}

	& > .short-about {
		width: 95%;
		display: flex;
		flex-direction: column;
		margin-top: 5%;

		& > .staff-container {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-around;
			margin: 2.5% 0;
			height: 50vw;

			& > img {
				border: 2px solid black;
				max-height: 100%;
				max-width: calc(55% - 4px);
			}

			& > .name {
				width: calc(45% - 4px);
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				align-items: center;

				& > h3,
				h4 {
					margin: 0;
					padding: 0 2%;
					width: 100%;
					text-align: center;
				}

				& > .link {
					font-weight: bold;
					padding: 5px 10px;
					align-self: center;
					margin: 2.5% 0;
				}
			}
		}
	}

	& > .get-started {
		width: 95%;
		display: flex;
		flex-direction: column;
		margin-top: 5%;

		& > .get-started-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			margin: 2.5% 0;

			& > h2 {
				width: 50%;
				text-align: center;
			}

			& > .right-side {
				width: 50%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				& > .link {
					width: 50%;
					font-weight: bold;
					padding: 5px 10px;
					align-self: center;
					margin: 2.5% 0;
				}

				& > .social-media {
					width: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-evenly;
				}
			}
		}
	}
`;
