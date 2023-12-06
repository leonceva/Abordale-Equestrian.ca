import styled from 'styled-components';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const DesktopLayout = (props) => {
	const content = props.content;
	return (
		<DesktopDiv>
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

	@media screen and (max-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}
`;
