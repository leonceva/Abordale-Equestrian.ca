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
		position: 'relative',
		width: '100%',
		height: '40vh',
		marginTop: '2.5%',
		display: 'flex',
		flexDirection: 'row',
		flexAlign: 'center',
		justifyContent: 'center',
	};

	const styleImage = {
		position: 'absolute',
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'fill',
		border: '2px solid black',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
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
					Explore equestrian excellence with our tailored lessons and boarding options. Our
					instructors cater to all levels, forging a meaningful connection between riders and
					horses. Our boarding facilities prioritize the well-being of your equine companions,
					providing a secure and nurturing environment. Join us for a journey into the timeless
					beauty of horse riding and companionship.
				</p>
				<h3 className='start'>
					Contact us for details regarding boarding or to book your first lesson. We look forward to
					riding with you!
				</h3>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space;
	align-items: center;
	flex-wrap: wrap;

	& > .intro {
		text-align: justify;
		padding: 0 5%;

		& .start {
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const styleWrapper = {
		position: 'relative',
		width: '90%',
		height: '70vh',
		display: 'flex',
		flexDirection: 'row',
		flexAlign: 'center',
		justifyContent: 'center',
	};

	const styleImage = {
		position: 'absolute',
		maxWidth: '100%',
		maxHeight: '100%',
		objectFit: 'fill',
		border: '2px solid black',
		left: '50%',
		top: '0%',
		transform: 'translate(-50%, 0%)',
	};

	return (
		<MobileDiv>
			<p className='intro'>
				Explore equestrian excellence with our tailored lessons and boarding options. Our
				instructors cater to all levels, forging a meaningful connection between riders and horses.
				Our boarding facilities prioritize the well-being of your equine companions, providing a
				secure and nurturing environment. Join us for a journey into the timeless beauty of horse
				riding and companionship.
			</p>
			<Image
				styleWrapper={styleWrapper}
				styleImage={styleImage}
				lowResSrc={lesson_img_lowRes}
				highResSrc={lesson_img_highRes}
			/>
			{/* <img src={lesson_img} alt='Lesson 01' /> */}
			<h3 className='start'>
				Contact us for details regarding boarding or to book your first lesson. We look forward to
				riding with you!
			</h3>
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
		margin: 5%;
		text-align: justify;
		line-height: 130%;
	}

	& > .start {
		margin: 5%;
	}
`;
