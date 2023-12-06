import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const Facilities = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Facilities;

export const DesktopContent = () => {
	return <>Facilities Desktop Mode</>;
};

export const MobileContent = () => {
	return <>Facilities Mobile Mode</>;
};
