import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
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

const Facilities = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Facilities;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	const styleWrapper = {
		position: 'relative',
		width: '100%',
		height: '100%',
		zIndex: '3',
	};

	const styleImage = {
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	};

	return (
		<DesktopDiv>
			<div className='intro'>
				Peruse our distinguished equestrian locale, strategically situated just south of
				Stittsville. This establishment seamlessly merges urban accessibility with serene
				landscapes, offering an enduring setting for riders and their equine counterparts.
				Explore our thoughtfully designed amenities, well-appointed stables, and expansive
				riding arenas, all contributing to an environment committed to the enduring pursuit
				of equestrian excellence. This is more than a facility; it is a destination where
				riders and horses forge enduring connections and achievements.
			</div>

			<div className='img-container'>
				<div className='img-wrapper'>
					<img
						src={facility_01_lowRes}
						alt='Facility 01 Background'
						className='facility-bg'
					/>
					{/* <img className='facility-img' src={facility_01_highRes} alt='Facility 01' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_01_lowRes}
						highResSrc={facility_01_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_02_lowRes}
						alt='Facility 02 Background'
						className='facility-bg'
					/>
					{/* <img className='facility-img' src={facility_02_highRes} alt='Facility 02' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_02_lowRes}
						highResSrc={facility_02_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_03_lowRes}
						alt='Facility 03 Background'
						className='facility-bg'
					/>
					{/* <img className='facility-img' src={facility_03_highRes} alt='Facility 03' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_03_lowRes}
						highResSrc={facility_03_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_04_lowRes}
						alt='Facility 04 Background'
						className='facility-bg'
					/>
					{/* <img className='facility-img' src={facility_04_highRes} alt='Facility 04' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_04_lowRes}
						highResSrc={facility_04_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_05_lowRes}
						alt='Facility 05 Background'
						className='facility-bg'
					/>
					{/* <img className='facility-img' src={facility_05_highRes} alt='Facility 05' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_05_lowRes}
						highResSrc={facility_05_highRes}
					/>
				</div>
				<div className='bottom-space' />
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

	& > .intro {
		margin: 2.5% 0;
		text-align: justify;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 1em;
	}

	& > .img-container {
		width: 100%;
		min-height: 50vh;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;

		& > .img-wrapper {
			min-width: 300px;
			flex: 1;
			max-width: 30%;
			height: calc(50vh - 4px);
			border: 2px solid black;
			position: relative;
			background-color: white;
			z-index: 1;
			margin: 0.5em 0.5em;

			& > .facility-bg {
				width: 100%;
				height: 100%;
				opacity: 0.5;
				position: absolute;
				z-index: 2;
				filter: blur(1px);
			}

			& > .facility-img {
				position: absolute;
				max-width: calc(100% - 6px);
				max-height: calc(100% - 6px);
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 3;
			}
		}

		& > .bottom-space {
			height: 5%;
			width: 100%;
		}
	}

	& > .bottom {
		width: 100%;
		height: 20px;
		background-color: blue;
		position: absolute;
		bottom: 0;
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const styleWrapper = {
		position: 'relative',
		width: '100%',
		height: '100%',
		zIndex: '3',
	};

	const styleImage = {
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
	};

	return (
		<MobileDiv>
			<div className='intro'>
				Peruse our distinguished equestrian locale, strategically situated just south of
				Stittsville. This establishment seamlessly merges urban accessibility with serene
				landscapes, offering an enduring setting for riders and their equine counterparts.
				Explore our thoughtfully designed amenities, well-appointed stables, and expansive
				riding arenas, all contributing to an environment committed to the enduring pursuit
				of equestrian excellence. This is more than a facility; it is a destination where
				riders and horses forge enduring connections and achievements.
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<img
						src={facility_01_lowRes}
						alt='Facility 01 Background'
						className='facility-bg'
					/>
					{/* <img src={facility_01_highRes} alt='Facility 01' className='facility-img' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_01_lowRes}
						highResSrc={facility_01_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_02_lowRes}
						alt='Facility 02 Background'
						className='facility-bg'
					/>
					{/* <img src={facility_02_highRes} alt='Facility 02' className='facility-img' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_02_lowRes}
						highResSrc={facility_02_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_03_lowRes}
						alt='Facility 03 Background'
						className='facility-bg'
					/>
					{/* <img src={facility_03_highRes} alt='Facility 03' className='facility-img' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_03_lowRes}
						highResSrc={facility_03_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_04_lowRes}
						alt='Facility 04 Background'
						className='facility-bg'
					/>
					{/* <img src={facility_04_highRes} alt='Facility 04' className='facility-img' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_04_lowRes}
						highResSrc={facility_04_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<img
						src={facility_05_lowRes}
						alt='Facility 05 Background'
						className='facility-bg'
					/>
					{/* <img src={facility_05_highRes} alt='Facility 05' className='facility-img' /> */}
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_05_lowRes}
						highResSrc={facility_05_highRes}
					/>
				</div>
				<div className='bottom-space' />
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
	line-height: 130%;

	& > .intro {
		margin: 5%;
		text-align: justify;
		padding: 0.5em;
		background-color: rgba(256, 256, 256, 0.6);
	}

	& > .img-container {
		width: 80%;
		height: 50vh;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;

		& > .img-wrapper {
			width: 100%;
			height: 100%;
			border: 2px solid black;
			background-color: white;
			z-index: 1;
			position: relative;
			margin: 2.5% 0;

			& > .facility-bg {
				width: 100%;
				height: 100%;
				opacity: 0.3;
				position: absolute;
				z-index: 2;
				filter: blur(1px);
			}

			& > .facility-img {
				position: absolute;
				max-width: calc(100% - 6px);
				max-height: calc(100% - 6px);
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
				z-index: 3;
			}
		}

		& > .bottom-space {
			height: 5%;
			width: 100%;
		}
	}
`;
