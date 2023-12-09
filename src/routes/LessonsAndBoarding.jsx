import styled from 'styled-components';
import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import lesson_img from '../images/placeholder-lesson-01.jpg';

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
	return (
		<DesktopDiv>
			<img src={lesson_img} alt='Lesson 01' />
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
	flex-direction: row;
	justify-content: start;
	align-items: center;

	& > img {
		max-width: 60%;
		max-height: 50vh;
		border: 2px solid black;
		margin-top: 5%;
	}

	& > .intro {
		flex: 1;
		margin: 2.5% 0;
		text-align: justify;
		padding: 0 5%;

		& .start {
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	return (
		<MobileDiv>
			<p className='intro'>
				Explore equestrian excellence with our tailored lessons and boarding options. Our
				instructors cater to all levels, forging a meaningful connection between riders and horses.
				Our boarding facilities prioritize the well-being of your equine companions, providing a
				secure and nurturing environment. Join us for a journey into the timeless beauty of horse
				riding and companionship.
			</p>
			<img src={lesson_img} alt='Lesson 01' />
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

	& > img {
		max-width: 90vw;
		max-height: 70vh;
		border: solid 2px black;
	}

	& > .start {
		margin: 5%;
	}
`;
