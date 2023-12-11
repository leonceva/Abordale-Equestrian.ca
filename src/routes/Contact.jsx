import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import group_photo from '../images/placeholder-lesson-02.png';
import SocialMediaLink from '../components/SocialMediaLink';
import Map from '../components/Map';

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
			<div className='intro'>
				Whether you're seeking information about lessons, boarding, or any other inquiry, we're here
				to help. Reach out to us to explore the world of horses and schedule your next riding
				experience. We look forward to hearing from you soon!
			</div>
			<div className='container'>
				<img src={group_photo} alt='Group' />
				<div className='info'>
					<div className='social-media'>
						<div className='link-wrapper'>
							<SocialMediaLink type='instagram' size='40px' className='link' />
						</div>
						<div className='link-wrapper'>
							<SocialMediaLink type='facebook' size='40px' className='link' />
						</div>
						<div className='link-wrapper'>
							<SocialMediaLink type='email' size='40px' className='link' />
						</div>
					</div>
					<p>
						<strong>abordale.equestrian@gmail.com</strong>
					</p>
					<Map />
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
	}

	& > .container {
		width: 100%;
		height: 60vh;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
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
			flex-direction: column;
			justify-content: end;
			align-items: center;

			& > .social-media {
				display: flex;
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
				Whether you're seeking information about lessons, boarding, or any other inquiry, we're here
				to help. Reach out to us to explore the world of horses and schedule your next riding
				experience. We look forward to hearing from you soon!
			</div>
			<div className='container'>
				<div className='social-media'>
					<div className='link-wrapper'>
						<SocialMediaLink type='instagram' size='50px' />
					</div>
					<div className='link-wrapper'>
						<SocialMediaLink type='facebook' size='50px' />
					</div>
					<div className='link-wrapper'>
						<SocialMediaLink type='email' size='50px' />
					</div>
				</div>
				<p>
					<strong>abordale.equestrian@gmail.com</strong>
				</p>
				<Map />
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
		line-height: 130%;
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

		& > #map-container {
			width: 80vw;
			height: 50vh;
			background-color: red;
		}
	}
`;
