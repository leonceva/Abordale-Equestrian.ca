import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const Root = () => {
	return (
		<RootDiv>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='outlet'>
				<Outlet />
			</div>
		</RootDiv>
	);
};

export const RootDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	& > .navbar {
		width: 100%;
		position: fixed;
		z-index: 9;
		border-bottom: 2px;
		border-style: solid;
		border-width: 0 0 2px 0;
		border-color: #333;
		@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
			height: 150px;
		}
		@media screen and (width: ${MOBILE_MODE_LIMIT}) {
			height: 100px;
		}
		@media screen and (max-width: ${MOBILE_MODE_LIMIT}) {
			height: 100px;
		}
	}

	& > .outlet {
		position: relative;
		@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
			height: calc(100vh - 150px);
			top: 150px;
		}
		@media screen and (width: ${MOBILE_MODE_LIMIT}) {
			height: calc(100vh - 100px);
			top: 100px;
		}
		@media screen and (max-width: ${MOBILE_MODE_LIMIT}) {
			height: calc(100vh - 100px);
			top: 100px;
		}
	}
`;

export default Root;
