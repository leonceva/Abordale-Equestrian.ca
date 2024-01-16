import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import group_photo_highRes from '../images/placeholder-lesson-02.png';
import group_photo_lowRes from '../images/placeholder-lesson-02-lazy.png';
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
		aspectRatio: '1/1',
		position: 'relative',
		maxWidth: '100%',
		height: '90%',
	};

	const styleImage = {
		height: '100%',
		position: 'absolute',
		right: '5%',
		top: '50%',
		transform: 'translate(0%, -50%)',
		border: '2px solid black',
	};

	return (
		<DesktopDiv>
			<div className='intro'>
				Whether you're seeking information about lessons, boarding, or any other inquiry,
				we're here to help. Reach out to us to explore the world of horses and schedule your
				next riding experience. We look forward to hearing from you soon!
			</div>
			<div className='container'>
				<Image
					styleWrapper={styleWrapper}
					styleImage={styleImage}
					lowResSrc={group_photo_lowRes}
					highResSrc={group_photo_highRes}
				/>
				{/* <img src={group_photo_highRes} alt='Group' /> */}
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
					<h3>abordale.equestrian@gmail.com</h3>
					<div className='map-container'>
						<Map />
					</div>
				</div>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	& > .intro {
		margin: 2.5% 0;
		text-align: justify;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 1em;
	}

	& > .container {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: end;

		& > img {
			max-height: 100%;
			max-width: 50%;
			border: 2px solid black;
			margin-right: 2%;
		}

		& > .info {
			height: 100%;
			display: flex;
			width: 50%;
			flex-direction: column;
			justify-content: start;
			align-items: center;

			& > .map-container {
				position: relative;
				height: 70%;
				max-width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: end;
				align-items: center;
				aspect-ratio: 1/1;
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
				<p className='heading-font'>
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
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;

	& > .intro {
		margin: 5%;
		text-align: justify;
		line-height: 120%;
		background-color: rgba(256, 256, 256, 0.6);
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
