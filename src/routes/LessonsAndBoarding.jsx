import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const LessonsAndBoarding = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default LessonsAndBoarding;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	return <>Lessons and Boarding Desktop Mode</>;
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: 100%;
`;

/************************************************************* Component ****************************************************************************/

export const MobileContent = () => {
	return <>Lessons and Boarding Mobile Mode</>;
};
