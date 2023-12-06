import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';

const Home = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default Home;

export const DesktopContent = () => {
	return <>Home Desktop Mode</>;
};

export const MobileContent = () => {
	return <>Home Mobile Mode</>;
};
