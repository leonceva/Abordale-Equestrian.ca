import styled from 'styled-components';
import background_img from '../images/stock-01.jpg';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const MobileLayout = (props) => {
	const content = props.content;
	return (
		<MobileDiv>
			<div className='background' />
			<div className='mobile-content'>{content}</div>
		</MobileDiv>
	);
};

export default MobileLayout;

export const MobileDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	width: 100%;
	position: relative;

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	@media screen and (width: ${MOBILE_MODE_LIMIT}) {
		display: inherit;
		font-size: calc(max(2vh, 2vw));
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
		opacity: 0.25;
	}

	& > .mobile-content {
		width: 100%;
		min-height: calc(100vh - 100px);
		z-index: 2;
		top: 0;
		position: absolute;
		overflow-y: scroll;
	}
`;
