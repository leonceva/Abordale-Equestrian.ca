import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import lesson_img_highRes from '../images/placeholder-lesson-01.jpg';
import lesson_img_lowRes from '../images/placeholder-lesson-01-lazy.jpg';
import Image from '../components/Image';

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
	const styleWrapper = {
		aspectRatio: '1/1',
		width: '45%',
		position: 'relative',
	};

	const styleImage = {
		width: '100%',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<DesktopDiv>
			<Image
				styleWrapper={styleWrapper}
				styleImage={styleImage}
				lowResSrc={lesson_img_lowRes}
				highResSrc={lesson_img_highRes}
			/>
			{/* <img src={lesson_img} alt='Lesson 01' /> */}
			<div className='intro'>
				<p>
					Explore equestrian excellence with our tailored lessons and boarding options.
					Our instructors cater to all levels, forging a meaningful connection between
					riders and horses. Our boarding facilities prioritize the well-being of your
					equine companions, providing a secure and nurturing environment. Join us for a
					journey into the timeless beauty of horse riding and companionship.
				</p>
				<h3 className='start'>
					Contact us for details regarding boarding or to book your first lesson. We look
					forward to riding with you!
				</h3>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;

	& > .intro {
		text-align: justify;
		width: 40%;
		padding: 0 1em;
		background-color: rgba(256, 256, 256, 0.6);
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const styleWrapper = {
		width: '90%',
		height: '50vh',
		position: 'relative',
		marginTop: '5%',
	};

	const styleImage = {
		width: '100%',
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		border: '2px solid black',
	};

	return (
		<MobileDiv>
			<p className='intro'>
				Explore equestrian excellence with our tailored lessons and boarding options. Our
				instructors cater to all levels, forging a meaningful connection between riders and
				horses. Our boarding facilities prioritize the well-being of your equine companions,
				providing a secure and nurturing environment. Join us for a journey into the
				timeless beauty of horse riding and companionship.
			</p>
			<h3 className='start'>
				Contact us for details regarding boarding or to book your first lesson. We look
				forward to riding with you!
			</h3>
			<Image
				styleWrapper={styleWrapper}
				styleImage={styleImage}
				lowResSrc={lesson_img_lowRes}
				highResSrc={lesson_img_highRes}
			/>
			{/* <img src={lesson_img} alt='Lesson 01' /> */}
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

	& > .intro {
		width: 90%;
		margin: 2.5% 2.5% 0;
		text-align: left;
		line-height: 120%;
		background-color: rgba(256, 256, 256, 0.6);
		padding: 0.5em;
	}

	& > .start {
		width: 90%;
		margin: 2.5% 2.5% 0;
		padding: 0.5em;
		background-color: rgba(256, 256, 256, 0.6);
	}
`;
