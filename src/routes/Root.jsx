import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';

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
		height: 100px;
	}

	& > .outlet {
		height: calc(100vh - 100px);
	}
`;

export default Root;
