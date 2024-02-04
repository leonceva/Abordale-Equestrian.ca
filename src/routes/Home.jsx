import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import Carousel from '../components/Carousel';
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
							The equestrian center boasts a range of well-maintained facilities
							catering to horse enthusiasts of all levels. The center includes
							spacious and secure stables, an expansive riding arena, and well-groomed
							trails for leisurely rides. Riders can make use of basic equipment and
							grooming areas, while the center also provides a cozy clubhouse for
							gatherings and events. With a focus on functionality and comfort, the
							equestrian center offers a welcoming environment for both riders and
							their equine companions.
						</p>
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
						<div className='email'>abordale.equestrian@gmail.com</div>
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

	& > .content {
		width: 100%;

		& > .content-container {
			width: 100%;
			height: 60vh;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;

			& > .carousel {
				flex: 3;
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
				flex: 3;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding-left: 2em;

				& > p {
					text-align: justify;
					padding: 0.5em;
				}

				& > .button-container {
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-evenly;
					flex-wrap: wrap;
					align-items: center;
				}

				& > .email {
					text-align: center;
					font-size: 1.3em;
					width: 100%;
				}
			}
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
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
				<div className='email'>abordale.equestrian@gmail.com</div>
			</div>
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
		& > .email {
			width: 95%;
			text-align: right;
			margin: 0 2.5% 2.5% 2.5%;
		}
	}

	& > .content {
		width: 95%;

		& > .content-container {
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
					background-color: rgb(18, 17, 31);

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
		}
	}
`;
