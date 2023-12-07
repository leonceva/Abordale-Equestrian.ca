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

export const DesktopContent = () => {
	return <>Lessons Desktop Mode</>;
};

export const MobileContent = () => {
	return <>Lessons Mobile Mode</>;
};
