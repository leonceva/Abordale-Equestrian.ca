/* eslint-disable no-unused-vars */
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sean_img_highRes from '../images/placeholder-sean-01.jpg';
import sean_img_lowRes from '../images/placeholder-sean-01-lazy.jpg';
import brandon_img_highRes from '../images/placeholder-brandon-01.jpg';
import brandon_img_lowRes from '../images/placeholder-brandon-01-lazy.jpg';
import facility_01_highRes from '../images/placeholder-facility-01.jpg';
import facility_02_highRes from '../images/placeholder-facility-02.jpg';
import facility_03_highRes from '../images/placeholder-facility-03.jpg';
import facility_04_highRes from '../images/placeholder-facility-04.jpg';
import facility_05_highRes from '../images/placeholder-facility-05.jpg';
import facility_01_lowRes from '../images/placeholder-facility-01-lazy.jpg';
import facility_02_lowRes from '../images/placeholder-facility-02-lazy.jpg';
import facility_03_lowRes from '../images/placeholder-facility-03-lazy.jpg';
import facility_04_lowRes from '../images/placeholder-facility-04-lazy.jpg';
import facility_05_lowRes from '../images/placeholder-facility-05-lazy.jpg';
import Image from '../components/Image';
import SocialMediaLink from '../components/SocialMediaLink';
import { useRef, useState, useEffect } from 'react';

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

	const styleWrapperStaff = {
		position: 'relative',
		height: '300px',
		width: '30%',
		border: '2px solid black',
		backgroundColor: 'rgb(18, 17, 31)',
	};

	const styleImageStaff = {
		position: 'absolute',
		maxWidth: '100%',
		maxHeight: '100%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	};

	return (
		<DesktopDiv>
			<h2 className='title'>Welcome To Abordale Equestrian</h2>
			<span className='welcome-message'>
				Discover the perfect blend of passion and purpose at Abordale Equestrian. Located
				just south of Stittsville, our premier facility offers top-notch boarding, expert
				training, and enriching riding lessons. Immerse yourself in a community dedicated to
				the well-being of horses and the joy of riding. Explore our state-of-the-art
				facilities, meet our experienced trainers, and embark on an exciting journey where
				every hoofbeat tells a story. Welcome to Abordale Equestrian, where the love for
				horses knows no bounds. Saddle up and let the adventure begin!
			</span>
			<div className='facility'>
				<div className='facility-container'>
					<div className='carousel'>
						<Carousel />
					</div>
					<div className='description-container'>
						<h2>Discover Our Facilities</h2>
						<p>
							The equestrian center boasts a range of well-maintained facilities
							catering to horse enthusiasts of all levels. The center includes
							spacious and secure stables, an expansive riding arena, and well-groomed
							trails for leisurely rides. Riders can make use of basic equipment and
							grooming areas, while the center also provides a cozy clubhouse for
							gatherings and events. With a focus on functionality and comfort, the
							equestrian center offers a welcoming environment for both riders and
							their equine companions.
						</p>
						<span
							className='button link'
							onClick={() => {
								navigate('/facilities');
							}}>
							Learn More
						</span>
					</div>
				</div>
			</div>
			<>
				{/*
			<div className='short-about'>
				<div className='staff-container'>
					<Image
						styleWrapper={styleWrapperStaff}
						styleImage={styleImageStaff}
						lowResSrc={sean_img_lowRes}
						highResSrc={sean_img_highRes}
					/>
					<div className='staff-bio'>
						<h3 className='name'>
							Sean Jenkin - Your Expert in Eventing, Hunter/Jumper, and Dressage
						</h3>
						<p className='bio'>
							Welcome to the world of equestrian excellence with Sean, a seasoned
							professional specializing in eventing, hunter/jumper, and dressage. With
							a passion for precision and a commitment to fostering the rider-horse
							connection, he tailors training programs for all levels of riders.
						</p>
						<span
							className='link button'
							onClick={() => {
								navigate('/about');
							}}>
							Read More
						</span>
					</div>
				</div>
				<div className='staff-container'>
					<Image
						styleWrapper={styleWrapperStaff}
						styleImage={styleImageStaff}
						lowResSrc={brandon_img_lowRes}
						highResSrc={brandon_img_highRes}
					/>
					
					<div className='staff-bio'>
						<h3 className='name'>Brandon Fehér - Our Steward of Equine Care</h3>
						<p className='bio'>
							At the helm of Abordale Equestrian, Brandon serves as our dedicated Barn
							Manager, ensuring the optimal care and well-being of our equine
							companions. With a wealth of experience and a passion for horses, he
							expertly oversees daily operations, guaranteeing that every horse
							receives the highest standard of care.
						</p>
						<span
							className='link button'
							onClick={() => {
								navigate('/about');
							}}>
							Read More
						</span>
					</div>
				</div>
			</div>*/}
			</>
			<div className='get-started'>
				<div className='get-started-container'>
					<h1>Ready To Start?</h1>
					<span
						className='link button'
						onClick={() => {
							navigate('/lessons-and-boarding');
						}}>
						Explore Lessons and Boarding
					</span>
					<div className='contact-info'>
						<h2>Get In Touch</h2>
						<div className='social-media'>
							<SocialMediaLink
								size='35px'
								type='instagram'
							/>
							<SocialMediaLink
								size='35px'
								type='facebook'
							/>
							<SocialMediaLink
								size='35px'
								type='email'
							/>
						</div>
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

	& > .title {
		margin: 15px 0;
	}

	& > .welcome-message {
		margin-bottom: 25px;
		text-align: justify;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 1em;
	}

	& > .facility {
		width: 100%;

		& > .facility-container {
			width: 100%;
			height: 60vh;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;

			& > .carousel {
				flex: 2;
				height: 100%;
				border: 2px solid black;
				position: relative;

				& > .img-div {
					height: 100%;
					width: 100%;
					background-color: white;

					& > img {
						transition: all 1s;
						position: absolute;
					}

					& > .img-show {
						max-width: 100%;
						max-height: 100%;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						z-index: 2;
						opacity: 1;
					}

					& > .img-bg {
						height: 100%;
						width: 100%;
						opacity: 0.4;
						filter: blur(2px);
					}

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

						&:active {
							transition: all 100ms;
							width: 20px;
						}
					}
				}
			}

			& > .description-container {
				flex: 3;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				& > h2 {
					margin: 0;
					margin-left: 2.5%;
					width: 100%;
					padding-left: 0.5em;
				}

				& > p {
					margin-left: 2.5%;
					text-align: justify;
					background-color: rgba(256, 256, 256, 0.6);
					padding: 0.5em;
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
			justify-content: space-between;
			align-items: center;
			height: max-content;
			margin-bottom: 5vh;

			& > h1 {
				height: 100%;
				text-align: center;
				max-width: 30%;
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
				max-width: 30%;

				& > h2 {
					text-align: center;
				}

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

	const styleWrapperStaff = {
		position: 'relative',
		height: '100%',
		width: 'calc(55% - 4px)',
	};

	const styleImageStaff = {
		position: 'absolute',
		maxWidth: '100%',
		maxHeight: '100%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<MobileDiv>
			<h2>Welcome To Abordale Equestrian</h2>
			<div className='welcome-message'>
				Discover the perfect blend of passion and purpose at Abordale Equestrian. Located
				just south of Stittsville, our premier facility offers top-notch boarding, expert
				training, and enriching riding lessons. Immerse yourself in a community dedicated to
				the well-being of horses and the joy of riding. Explore our state-of-the-art
				facilities, meet our experienced trainers, and embark on an exciting journey where
				every hoofbeat tells a story. Welcome to Abordale Equestrian, where the love for
				horses knows no bounds. Saddle up and let the adventure begin!
			</div>
			<div className='facility'>
				<div className='facility-container'>
					<div className='carousel'>
						<Carousel />
					</div>
					<div className='description-container'>
						<h2>Discover Our Facilities</h2>
						<p>
							The equestrian center boasts a range of well-maintained facilities
							catering to horse enthusiasts of all levels. The center includes
							spacious and secure stables, an expansive riding arena, and well-groomed
							trails for leisurely rides. Riders can make use of basic equipment and
							grooming areas, while the center also provides a cozy clubhouse for
							gatherings and events. With a focus on functionality and comfort, the
							equestrian center offers a welcoming environment for both riders and
							their equine companions.
						</p>
						<span
							className='button link'
							onClick={() => {
								navigate('/facilities');
							}}>
							Learn More
						</span>
					</div>
				</div>
			</div>
			<>
				{/* <div className='short-about'>
					<div className='staff-container'>
						<Image
							styleWrapper={styleWrapperStaff}
							styleImage={styleImageStaff}
							lowResSrc={sean_img_lowRes}
							highResSrc={sean_img_highRes}
						/>
						<div className='name'>
							<h3>Sean Jenkin</h3>
							<h4>Your Expert in Eventing, Hunter/Jumper, and Dressage</h4>
							<span
								className='link button'
								onClick={() => {
									navigate('/about');
								}}>
								Read More
							</span>
						</div>
					</div>
					<div className='staff-container'>
						<Image
							styleWrapper={styleWrapperStaff}
							styleImage={styleImageStaff}
							lowResSrc={brandon_img_lowRes}
							highResSrc={brandon_img_highRes}
						/>
						<div className='name'>
							<h3>Brandon Fehér</h3>
							<h4>Our Steward of Equine Care</h4>
							<span
								className='link button'
								onClick={() => {
									navigate('/about');
								}}>
								Read More
							</span>
						</div>
					</div>
				</div> */}
			</>
			<div className='get-started'>
				<div className='get-started-container'>
					<h2>Ready To Start?</h2>
					<div className='right-side'>
						<span
							className='link button'
							onClick={() => {
								window.scrollTo(0, 0);
								navigate('/lessons-and-boarding');
							}}>
							Explore Lessons and Boarding
						</span>
					</div>
				</div>
				<div className='get-started-container'>
					<h2>Get In Touch</h2>
					<div className='right-side'>
						<div className='social-media'>
							<SocialMediaLink
								size='40px'
								type='instagram'
							/>
							<SocialMediaLink
								size='40px'
								type='facebook'
							/>
							<SocialMediaLink
								size='40px'
								type='email'
							/>
						</div>
					</div>
				</div>
			</div>
		</MobileDiv>
	);
};

export const MobileDiv = styled.div`
	width: 100vw;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	overflow-x: hidden;

	& > h2 {
		text-align: center;
	}

	& > .welcome-message {
		margin: 0 5% 5%;
		line-height: 125%;
		text-align: left;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 0.5em;
	}

	& > .facility {
		width: 95%;

		& > .facility-container {
			width: 100%;
			height: 80vh;
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;

			& > .carousel {
				flex: 4;
				height: 100%;
				width: 100%;
				border: 2px solid black;
				position: relative;

				& > .img-div {
					height: 100%;
					width: 100%;
					background-color: white;

					& > img {
						transition: all 1s;
						position: absolute;
					}

					& > .img-show {
						max-width: 100%;
						max-height: 100%;
						left: 50%;
						top: 50%;
						transform: translate(-50%, -50%);
						z-index: 2;
						opacity: 1;
					}

					& > .img-bg {
						height: 100%;
						width: 100%;
						opacity: 0.4;
					}

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

						&:active {
							transition: all 100ms;
							width: 20px;
						}
					}
				}
			}
			& > .description-container {
				flex: 1;
				height: 100%;
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: start;
				margin-top: 2.5%;

				& > h2 {
					margin: 0;
					padding: 0 5% 0;
					width: 100%;
					text-align: center;
				}

				& > p {
					margin: 0 0 2.5%;
					text-align: justify;
					padding: 0.5em;
					background-color: rgba(256, 256, 256, 0.6);
				}

				& > .link {
					font-weight: bold;
					align-self: center;
					padding: 5px 10px;
					margin-bottom: 2.5%;
				}
			}
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
					width: 75%;
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

/************************************************************* Component ****************************************************************************/

export const Carousel = () => {
	const [imgNumber, setImgNumber] = useState(1);
	let current_num = useRef(imgNumber);
	let timerID = useRef(null);

	const NUMBER_IMAGES = 5;

	let img_src_highRes, img_src_lowRes, img_alt;

	switch (imgNumber) {
		case 1:
			img_src_highRes = facility_01_highRes;
			img_src_lowRes = facility_01_lowRes;
			img_alt = 'Facility 01';
			break;
		case 2:
			img_src_highRes = facility_02_highRes;
			img_src_lowRes = facility_02_lowRes;
			img_alt = 'Facility 02';
			break;
		case 3:
			img_src_highRes = facility_03_highRes;
			img_src_lowRes = facility_03_lowRes;
			img_alt = 'Facility 03';
			break;
		case 4:
			img_src_highRes = facility_04_highRes;
			img_src_lowRes = facility_04_lowRes;
			img_alt = 'Facility 04';
			break;
		case 5:
			img_src_highRes = facility_05_highRes;
			img_src_lowRes = facility_05_lowRes;
			img_alt = 'Facility 05';
			break;

		default:
			break;
	}

	const handleClick = (side) => {
		if (side === 'left') {
			if (imgNumber > 1) {
				setImgNumber(imgNumber - 1);
				current_num.current--;
			} else {
				setImgNumber(NUMBER_IMAGES);
				current_num.current = NUMBER_IMAGES;
			}
			clearInterval(timerID.current);
		}
		if (side === 'right') {
			if (imgNumber < NUMBER_IMAGES) {
				setImgNumber(imgNumber + 1);
				current_num.current++;
			} else {
				setImgNumber(1);
				current_num.current = 1;
			}
		}
		clearInterval(timerID.current);
	};

	useEffect(() => {
		timerID.current = setInterval(() => {
			current_num.current < NUMBER_IMAGES ? current_num.current++ : (current_num.current = 1);
			setImgNumber(current_num.current);
		}, 5000);

		return () => clearInterval(timerID.current);
	}, [imgNumber]);

	const styleWrapperCarousel = {
		position: 'absolute',
		width: '100%',
		height: '100%',
	};

	const styleImageCarousel = {
		position: 'absolute',
		height: 'calc(100% - 4px)',
		maxWidth: '100%',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
	};

	return (
		<>
			<div className='img-div'>
				<Image
					styleWrapper={styleWrapperCarousel}
					styleImage={styleImageCarousel}
					lowResSrc={img_src_lowRes}
					highResSrc={img_src_highRes}
					alt={img_alt}
				/>
				{/* <img loading='lazy' className='img-show' src={img_src_highRes} alt={img_alt} /> */}
				<img
					src={img_src_lowRes}
					alt='Background'
					className='img-bg'
				/>
				<div
					className='left'
					onClick={() => {
						handleClick('left');
					}}>
					<i
						className='bi bi-chevron-double-left'
						style={{ fontSize: '25px' }}
					/>
				</div>
				<div
					className='right'
					onClick={() => {
						handleClick('right');
					}}>
					<i
						className='bi bi-chevron-double-right'
						style={{ fontSize: '25px' }}
					/>
				</div>
			</div>
		</>
	);
};
