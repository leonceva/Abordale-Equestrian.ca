import styled from 'styled-components';
// import background_img_lowRes from '../images/stock-01-lazy.jpg';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const DesktopLayout = (props) => {
	const content = props.content;

	return (
		<DesktopDiv>
			<div className='background'>
				{/* <img
					src={background_img_lowRes}
					alt='Low Res Background'
				/> */}
			</div>
			<div className='desktop-content'>{content}</div>
		</DesktopDiv>
	);
};

export default DesktopLayout;

export const DesktopDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	position: relative;
	width: 100%;

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		font-size: calc(min(2vw, 2vh));
		& h2 {
			font-size: calc(min(3.5vw, 3.5vh));
		}
		& h3 {
			font-size: calc(min(3vw, 3vh));
		}
	}

	@media screen and (min-width: ${'900px'}) {
		font-size: calc(min(2.5vw, 2.5vh));
		& h2 {
			font-size: calc(min(4vw, 4vh));
		}
		& h3 {
			font-size: calc(min(3vw, 3vh));
		}
	}

	@media screen and (max-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	& > .background {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: #f5f5f5;

		& > img {
			object-fit: cover;
			opacity: 0.25;
			width: 100vw;
			height: 100vh;
		}
	}

	& > .desktop-content {
		padding: 0 10%;
		max-width: 2000px;
		z-index: 2;
		position: relative;
		top: 0;
	}
`;
