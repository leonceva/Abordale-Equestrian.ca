import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const About = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default About;

export const DesktopContent = () => {
	return <>About Desktop Mode</>;
};

export const MobileContent = () => {
	return <>About Mobile Mode</>;
};
