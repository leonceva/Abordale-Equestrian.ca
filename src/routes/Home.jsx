import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
import Image from '../components/Image';
import homepage_01_highRes from '../images/home/homepage_1_high_res.jpg';
import homepage_02_highRes from '../images/home/homepage_2_high_res.jpg';
import homepage_03_highRes from '../images/home/homepage_3_high_res.jpg';
import homepage_04_highRes from '../images/home/homepage_4_high_res.jpg';
import homepage_05_highRes from '../images/home/homepage_5_high_res.jpg';
import homepage_01_lowRes from '../images/home/homepage_1_low_res.jpg';
import homepage_02_lowRes from '../images/home/homepage_2_low_res.jpg';
import homepage_03_lowRes from '../images/home/homepage_3_low_res.jpg';
import homepage_04_lowRes from '../images/home/homepage_4_low_res.jpg';
import homepage_05_lowRes from '../images/home/homepage_5_low_res.jpg';
import SocialMediaLink from '../components/SocialMediaLink';
import devocoux_logo from '../images/devocoux-logo.png';

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
	return (
		<DesktopDiv>
			<h2 className='title'>Welcome To Abordale Equestrian</h2>
			<div className='content'>
				<div className='content-container'>
					<div className='carousel'>
						<Carousel
							lowRes={[
								homepage_01_lowRes,
								homepage_02_lowRes,
								homepage_03_lowRes,
								homepage_04_lowRes,
								homepage_05_lowRes,
							]}
							highRes={[
								homepage_01_highRes,
								homepage_02_highRes,
								homepage_03_highRes,
								homepage_04_highRes,
								homepage_05_highRes,
							]}
							length={5}
						/>
					</div>
					<div className='description-container'>
						<p>
							Abordale Equestrian, nestled in the scenic west of Ottawa in
							Stittsville, just a 20-minute drive from Wesley Clover Parks, offers a
							quality equestrian experience on a sprawling 100-acre property. The farm
							boasts a heated indoor arena and two outdoor sand rings, providing ample
							space for year-round riding and training. Riders can also explore the
							many hacking trails that wind through the property, offering a relaxing
							escape into nature. The facility ensures rider comfort with a heated
							lounge and a heated tack room equipped with lockers for boarders. With
							four tack-up bays, as well as two indoor and two outdoor wash stalls,
							the facility caters to all equestrian needs. Abordale Equestrian
							provides riding lessons for all skill levels, from beginners to
							competitive riders, ensuring personalized attention and growth for each
							individual.
						</p>
					</div>
					<div className='contact-info'>
						<div className='info'>
							<div className='button-container'>
								<h2>Get In Touch</h2>
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
							<div className='address'>
								6575 Flewellyn Road, Stittsville, ON K2S 1B6
							</div>
							<div className='email'>abordale.equestrian@gmail.com</div>
						</div>
						<div className='info'>
							<h2>Proudly Sponsored By</h2>
							<img
								src={devocoux_logo}
								alt='Devocoux'
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
		width: 100%;
		height: 2em;
		align-items: center;
		justify-content: center;
		display: flex;
	}

	& > .content {
		width: 100%;

		& > .content-container {
			width: 100%;
			height: 60vh;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;

			& > .carousel {
				width: calc(min(77vw, 700px));
				height: 100%;
				border: 2px solid black;
				position: relative;

				& > .img-div {
					height: 100%;
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

			& > .description-container {
				height: fit-content;
				display: flex;
				flex: 1;
				min-width: 400px;
				flex-direction: column;
				justify-content: start;
				align-items: center;
				padding-left: 0.5em;

				& > p {
					text-align: justify;
					padding: 0.5em 0.5em 0;
				}
			}

			& > .contact-info {
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				max-height: 200px;

				& .info {
					width: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					padding-bottom: 1em;
					height: 50%;

					& > .button-container {
						width: 100%;
						display: flex;
						flex-direction: row;
						justify-content: space-evenly;
						flex-wrap: wrap;
						align-items: center;
					}

					& > .address,
					.email {
						text-align: center;
						font-size: 1.3em;
						width: 100%;
					}

					& > img {
						height: 125px;
					}
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
			<h2>Welcome To Abordale Equestrian</h2>
			<div className='welcome-message'>
				Abordale Equestrian, nestled in the scenic west of Ottawa in Stittsville, just a
				20-minute drive from Wesley Clover Parks, offers a quality equestrian experience on
				a sprawling 100-acre property. The farm boasts a heated indoor arena and two outdoor
				sand rings, providing ample space for year-round riding and training. Riders can
				also explore the many hacking trails that wind through the property, offering a
				relaxing escape into nature. The facility ensures rider comfort with a heated lounge
				and a heated tack room equipped with lockers for boarders. With four tack-up bays,
				as well as two indoor and two outdoor wash stalls, the facility caters to all
				equestrian needs. Abordale Equestrian provides riding lessons for all skill levels,
				from beginners to competitive riders, ensuring personalized attention and growth for
				each individual.
			</div>
			<div className='get-started'>
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
				<div className='address'>6575 Flewellyn Road, Stittsville, ON K2S 1B6</div>
				<div className='email'>abordale.equestrian@gmail.com</div>
			</div>
			<div className='sponsors'>
				<h2>Proudly Sponsored By</h2>
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
						lowResSrc={homepage_01_lowRes}
						highResSrc={homepage_01_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={homepage_02_lowRes}
						highResSrc={homepage_02_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={homepage_03_lowRes}
						highResSrc={homepage_03_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={homepage_04_lowRes}
						highResSrc={homepage_04_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={homepage_05_lowRes}
						highResSrc={homepage_05_highRes}
					/>
				</div>
				<div className='bottom-space' />
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
		margin: 2.5% 2.5%;
	}

	& > .welcome-message {
		margin: 0 5% 0;
		line-height: 125%;
		text-align: left;
		padding: 0.5em;
	}

	& > .get-started {
		width: 95%;
		display: flex;
		flex-direction: column;

		& > .get-started-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			position: relative;
			margin: 2.5% 0 0;

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

				& > .social-media {
					width: 100%;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-evenly;
				}
			}
		}
		& > .address,
		.email {
			width: 95%;
			text-align: right;
			margin: 0 2.5% 2.5% 2.5%;
		}
	}

	& > .sponsors {
		width: 100%;
		height: fit-content;
		max-height: 40vh;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;

		& > h2 {
			width: 100%;
			text-align: center;
		}

		& > img {
			max-width: calc(min(90vw, 250px));
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
