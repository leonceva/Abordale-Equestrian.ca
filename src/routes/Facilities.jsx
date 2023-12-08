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
					<img src={facility_01} alt='Facility 01' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_02} alt='Facility 02' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_03} alt='Facility 03' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_04} alt='Facility 04' />
				</div>
				<div className='img-wrapper'>
					<img src={facility_05} alt='Facility 05' />
				</div>
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
		min-height: 50vh;
		height: max-content;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-evenly;
		flex-wrap: wrap;

		& > .img-wrapper {
			max-width: 32%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;

			& > img {
				border: 2px solid black;
				max-width: 100%;
				max-height: 95%;
			}
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	return <>Facilities Mobile Mode</>;
};
