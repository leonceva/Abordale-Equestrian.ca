import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const HorseShows = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default HorseShows;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	return <>HorseShows Desktop Mode</>;
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: 100%;
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	return <>Horse Shows Mobile Mode</>;
};
