import styled from 'styled-components';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const MobileLayout = (props) => {
	const content = props.content;
	return (
		<MobileDiv>
			<div className='mobile-content'>{content}</div>
		</MobileDiv>
	);
};

export default MobileLayout;

export const MobileDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	font-size: calc(max(2vh, 2vw));

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	@media screen and (width: ${MOBILE_MODE_LIMIT}) {
		display: inherit;
	}

	& > .mobile-content {
		width: 100%;
		min-height: calc(100vh - 100px);
		z-index: 2;
	}
`;
