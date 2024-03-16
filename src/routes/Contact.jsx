import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import contact_01_highRes from '../images/contact/contact_1_high_res.png';
import contact_01_lowRes from '../images/contact/contact_1_low_res.png';
import SocialMediaLink from '../components/SocialMediaLink';
import Map from '../components/Map';
import Image from '../components/Image';

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
	const styleWrapper = {
		position: 'absolute',
		width: '100%',
		height: '100%',
	};

	const styleImage = {
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		position: 'absolute',
		left: '50%',
		bottom: '0%',
		transform: 'translate(-50%, 0)',
		border: '2px solid #333',
	};

	return (
		<DesktopDiv>
			<div className='top-space'>Placeholder</div>
			<div className='container'>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={contact_01_lowRes}
						highResSrc={contact_01_highRes}
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
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: auto;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: end;

	& > .top-space {
		margin: 2.5% 0 0;
		text-align: justify;
		width: 70vw;
		max-width: 2000px;
		color: transparent;
	}

	& > .container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: end;

		& > .img-wrapper {
			width: 50%;
			height: 60vh;
			z-index: 1;
			position: relative;
			align-self: end;
		}

		& > .info {
			height: 60vh;
			display: flex;
			width: 50%;
			flex-direction: column;
			justify-content: start;
			align-items: center;

			& > .map-container {
				position: relative;
				height: 40vh;
				width: 95%;
				display: flex;
				flex-direction: column;
				justify-content: end;
				align-items: center;
				border: 2px solid black;
				background-color: lightgray;
			}

			& > .social-media {
				display: flex;
				flex: 1;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;

				& > .link-wrapper {
					width: fit-content;
					padding: 0 20%;
				}
			}

			& > .address,
			.email {
				margin-bottom: 0.5em;
				font-weight: bold;
				font-size: 1.2em;
			}
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
