import styled from 'styled-components';
import background_img from '../images/stock-01.jpg';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const DesktopLayout = (props) => {
	const content = props.content;

	return (
		<DesktopDiv>
			<div className='background' />
			<div className='desktop-content'>{content}</div>
		</DesktopDiv>
	);
};

export default DesktopLayout;

export const DesktopDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
	align-items: center;
	overflow-y: scroll;

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
		background-image: url(${background_img});
		background-size: cover;
		background-position: center;
		opacity: 0.15;
	}

	& > .desktop-content {
		padding: 0 10%;
		max-width: 2000px;
		min-height: 100%;
		z-index: 2;
	}
`;
