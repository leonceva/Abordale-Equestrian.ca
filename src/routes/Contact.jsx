import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const Contact = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Contact;

export const DesktopContent = () => {
	return <>Contact Desktop Mode</>;
};

export const MobileContent = () => {
	return <>Contact Mobile Mode</>;
};
