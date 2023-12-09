import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import facility_01 from '../images/placeholder-facility-01.jpg';
import facility_02 from '../images/placeholder-facility-02.jpg';
import facility_03 from '../images/placeholder-facility-03.jpg';
import facility_04 from '../images/placeholder-facility-04.jpg';
import facility_05 from '../images/placeholder-facility-05.jpg';

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
			<div className='intro'>
				Peruse our distinguished equestrian locale, strategically situated just south of
				Stittsville. This establishment seamlessly merges urban accessibility with serene
				landscapes, offering an enduring setting for riders and their equine counterparts. Explore
				our thoughtfully designed amenities, well-appointed stables, and expansive riding arenas,
				all contributing to an environment committed to the enduring pursuit of equestrian
				excellence. This is more than a facility; it is a destination where riders and horses forge
				enduring connections and achievements.
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<img src={facility_01} alt='Facility 01 Background' className='facility-bg' />
					<img className='facility-img' src={facility_01} alt='Facility 01' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_02} alt='Facility 02 Background' className='facility-bg' />
					<img className='facility-img' src={facility_02} alt='Facility 02' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_03} alt='Facility 03 Background' className='facility-bg' />
					<img className='facility-img' src={facility_03} alt='Facility 03' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_04} alt='Facility 04 Background' className='facility-bg' />
					<img className='facility-img' src={facility_04} alt='Facility 04' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_05} alt='Facility 05 Background' className='facility-bg' />
					<img className='facility-img' src={facility_05} alt='Facility 05' />
				</div>
				<div className='bottom-space' />
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
	position: relative;

	& > .intro {
		margin: 2.5% 0;
	}

	& > .img-container {
		width: 100%;
		height: 50vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;

		& > .img-wrapper {
			width: 30%;
			height: 100%;
			border: 2px solid black;
			position: relative;
			margin-bottom: 2.5%;
			background-color: white;
			z-index: 1;

			& > .facility-bg {
				width: 100%;
				height: 100%;
				opacity: 0.3;
				position: absolute;
				z-index: 2;
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

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	return (
		<MobileDiv>
			<div className='intro'>
				Peruse our distinguished equestrian locale, strategically situated just south of
				Stittsville. This establishment seamlessly merges urban accessibility with serene
				landscapes, offering an enduring setting for riders and their equine counterparts. Explore
				our thoughtfully designed amenities, well-appointed stables, and expansive riding arenas,
				all contributing to an environment committed to the enduring pursuit of equestrian
				excellence. This is more than a facility; it is a destination where riders and horses forge
				enduring connections and achievements.
			</div>
			<div className='img-container'>
				<div className='img-wrapper'>
					<img src={facility_01} alt='Facility 01 Background' className='facility-bg' />
					<img src={facility_01} alt='Facility 01' className='facility-img' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_02} alt='Facility 02 Background' className='facility-bg' />
					<img src={facility_02} alt='Facility 02' className='facility-img' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_03} alt='Facility 03 Background' className='facility-bg' />
					<img src={facility_03} alt='Facility 03' className='facility-img' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_04} alt='Facility 04 Background' className='facility-bg' />
					<img src={facility_04} alt='Facility 04' className='facility-img' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_05} alt='Facility 05 Background' className='facility-bg' />
					<img src={facility_05} alt='Facility 05' className='facility-img' />
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
	}

	& > .img-container {
		width: 80%;
		height: 35vh;
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
