import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import Carousel from '../components/Carousel';
import facility_01_highRes from '../images/facilities/facilities_1_high_res.jpg';
import facility_02_highRes from '../images/facilities/facilities_2_high_res.jpg';
import facility_03_highRes from '../images/facilities/facilities_3_high_res.jpg';
import facility_04_highRes from '../images/facilities/facilities_4_high_res.jpg';
import facility_05_highRes from '../images/facilities/facilities_5_high_res.jpg';
import facility_06_highRes from '../images/facilities/facilities_6_high_res.jpg';
import facility_07_highRes from '../images/facilities/facilities_7_high_res.jpg';
import facility_01_lowRes from '../images/facilities/facilities_1_low_res.jpg';
import facility_02_lowRes from '../images/facilities/facilities_2_low_res.jpg';
import facility_03_lowRes from '../images/facilities/facilities_3_low_res.jpg';
import facility_04_lowRes from '../images/facilities/facilities_4_low_res.jpg';
import facility_05_lowRes from '../images/facilities/facilities_5_low_res.jpg';
import facility_06_lowRes from '../images/facilities/facilities_6_low_res.jpg';
import facility_07_lowRes from '../images/facilities/facilities_7_low_res.jpg';
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
	return (
		<DesktopDiv>
			<div className='carousel'>
				<Carousel
					lowRes={[
						facility_01_lowRes,
						facility_02_lowRes,
						facility_03_lowRes,
						facility_04_lowRes,
						facility_05_lowRes,
						facility_06_lowRes,
						facility_07_lowRes,
					]}
					highRes={[
						facility_01_highRes,
						facility_02_highRes,
						facility_03_highRes,
						facility_04_highRes,
						facility_05_highRes,
						facility_06_highRes,
						facility_07_highRes,
					]}
					length={7}
				/>
			</div>
			<div className='intro'>
				Our farm offers extensive facilities, including:
				<ul>
					<li>Heated indoor arena (120x60ft)</li>
					<li>Heated lounge</li>
					<li>Heated tack room with individual lockers for boarders</li>
					<li>Two outdoor sand rings</li>
					<li>Spacious, matted stalls for horse comfort</li>
					<li>Four tack-up bays</li>
					<li>Two indoor and two outdoor wash stalls</li>
					<li>Large paddocks for ample turnout</li>
					<li>Hacking trails</li>
					<li>Cross-country jumps in riding fields</li>
				</ul>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	min-width: 70vw;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	flex-wrap: wrap;
	align-items: top;
	margin-top: 2em;

	& > .intro {
		width: 35%;
		@media screen and (max-width: 1100px) {
			width: 100%;
		}
		margin-top: 1em;
		text-align: left;
		padding: 1em;
		align-self: center;
	}

	& > .carousel {
		width: calc(max(300px, 60%));
		height: 70vh;
		@media screen and (max-width: 1100px) {
			width: 80%;
			height: 50vh;
			margin-top: 1em;
		}
		border: 2px solid black;
		position: relative;
		margin-bottom: 1em;

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

	& > .sponsors {
		width: 100%;
		padding-bottom: 1em;
		display: flex;
		height: fit-content;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;

		& > img {
			max-width: 50vw;
			max-height: 125px;
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
			<div className='intro'>
				Our farm offers extensive facilities, including:
				<ul>
					<li>Heated indoor arena (120x60ft)</li>
					<li>Heated lounge</li>
					<li>Heated tack room with individual lockers for boarders</li>
					<li>Two outdoor sand rings</li>
					<li>Spacious, matted stalls for horse comfort</li>
					<li>Four tack-up bays</li>
					<li>Two indoor and two outdoor wash stalls</li>
					<li>Large paddocks for ample turnout</li>
					<li>Hacking trails</li>
					<li>Cross-country jumps in riding fields</li>
				</ul>
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_01_lowRes}
						highResSrc={facility_01_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_02_lowRes}
						highResSrc={facility_02_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_03_lowRes}
						highResSrc={facility_03_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_04_lowRes}
						highResSrc={facility_04_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_05_lowRes}
						highResSrc={facility_05_highRes}
					/>
				</div>
				<div className='img-wrapper'>
					<Image
						styleWrapper={styleWrapper}
						styleImage={styleImage}
						lowResSrc={facility_06_lowRes}
						highResSrc={facility_06_highRes}
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
		margin: 5% 5% 0;
		text-align: justify;
		padding: 0.5em;
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
