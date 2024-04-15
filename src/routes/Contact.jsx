import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import SocialMediaLink from '../components/SocialMediaLink';
import Map from '../components/Map';
import Carousel from '../components/Carousel';
import contact_01_highRes from '../images/contact/contact_high_res_01.jpg';
import contact_02_highRes from '../images/contact/contact_high_res_02.jpg';
import contact_03_highRes from '../images/contact/contact_high_res_03.jpg';
import contact_04_highRes from '../images/contact/contact_high_res_04.jpg';
import contact_05_highRes from '../images/contact/contact_high_res_05.jpg';
import contact_06_highRes from '../images/contact/contact_high_res_06.jpg';
import contact_01_lowRes from '../images/contact/contact_low_res_01.jpg';
import contact_02_lowRes from '../images/contact/contact_low_res_02.jpg';
import contact_03_lowRes from '../images/contact/contact_low_res_03.jpg';
import contact_04_lowRes from '../images/contact/contact_low_res_04.jpg';
import contact_05_lowRes from '../images/contact/contact_low_res_05.jpg';
import contact_06_lowRes from '../images/contact/contact_low_res_06.jpg';

const Contact = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Contact;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	return (
		<DesktopDiv>
			<div className='carousel'>
				<Carousel
					lowRes={[
						contact_01_lowRes,
						contact_02_lowRes,
						contact_03_lowRes,
						contact_04_lowRes,
						contact_05_lowRes,
						contact_06_lowRes,
					]}
					highRes={[
						contact_01_highRes,
						contact_02_highRes,
						contact_03_highRes,
						contact_04_highRes,
						contact_05_highRes,
						contact_06_highRes,
					]}
					length={6}
				/>
			</div>
			<div className='info'>
				<div className='social-media'>
					<div className='link-wrapper'>
						<SocialMediaLink
							type='instagram'
							size='40px'
							className='link'
						/>
					</div>
					<div className='link-wrapper'>
						<SocialMediaLink
							type='facebook'
							size='40px'
							className='link'
						/>
					</div>
					<div className='link-wrapper'>
						<SocialMediaLink
							type='email'
							size='40px'
							className='link'
						/>
					</div>
				</div>
				<div className='address'>6575 Flewellyn Road, Stittsville, ON K2S 1B6</div>
				<div className='email'>abordale.equestrian@gmail.com</div>
				<div className='map-container'>
					<Map />
				</div>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	min-width: 75vw;
	width: fit-content;
	height: fit-content;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-evenly;
	align-items: center;
	margin-top: 2em;

	& > .carousel {
		width: calc(max(300px, 40%));
		height: 70vh;
		@media screen and (max-width: 1100px) {
			width: 0%;
			height: 0vh;
			margin-top: 1em;
			margin-bottom: 1em;
			display: none;
		}
		border: 2px solid black;
		position: relative;

		& > .img-div {
			height: 70vh;
			@media screen and (max-width: 1100px) {
				width: 80%;
				height: 50vh;
			}

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

	& > .info {
		height: 70vh;
		display: flex;
		width: calc(100% - max(325px, 45%));
		@media screen and (max-width: 1100px) {
			width: 100%;
		}
		flex-direction: column;
		justify-content: start;
		align-items: center;

		& > .map-container {
			position: relative;
			flex: 1;
			width: 95%;
			display: flex;
			flex-direction: column;
			justify-content: end;
			align-items: center;
			border: 2px solid black;
			background-color: lightgray;
		}

		& > .social-media {
			width: 300px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;
			margin-bottom: 1em;

			& > .link-wrapper {
				width: fit-content;
			}
		}

		& > .address,
		.email {
			margin-bottom: 0.5em;
			font-weight: bold;
			font-size: 1.2em;
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	return (
		<MobileDiv>
			<div className='intro'>
				Whether you're seeking information about lessons, boarding, or any other inquiry,
				we're here to help. Reach out to us to explore the world of horses and schedule your
				next riding experience. We look forward to hearing from you soon!
			</div>
			<div className='container'>
				<div className='social-media'>
					<div className='link-wrapper'>
						<SocialMediaLink
							type='instagram'
							size='50px'
						/>
					</div>
					<div className='link-wrapper'>
						<SocialMediaLink
							type='facebook'
							size='50px'
						/>
					</div>
					<div className='link-wrapper'>
						<SocialMediaLink
							type='email'
							size='50px'
						/>
					</div>
				</div>
				<p
					className='heading-font'
					style={{ margin: '1em 0 0.5em' }}>
					<strong>6575 Flewellyn Road, Stittsville, ON K2S 1B6</strong>
				</p>
				<p
					className='heading-font'
					style={{ margin: '0.5em 0' }}>
					<strong>abordale.equestrian@gmail.com</strong>
				</p>
				<div className='map-container'>
					<Map />
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

	& > .intro {
		margin: 5% 5% 2.5%;
		text-align: justify;
		line-height: 120%;
		padding: 0.5em;
	}

	& > .container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;

		& > .social-media {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			& > .link-wrapper {
				padding: 0 5%;
			}
		}

		& > .map-container {
			position: relative;
			max-width: 90vw;
			height: 50vh;
			aspect-ratio: 1/1;
			background-color: lightgray;
			border: 2px solid black;
		}
	}
`;
