import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const Lessons = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Lessons;

export const DesktopContent = () => {
	return <>Lessons Desktop Mode</>;
};

export const MobileContent = () => {
	return <>Lessons Mobile Mode</>;
};
