import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Root = () => {
	return (
		<RootDiv>
			<Outlet />
		</RootDiv>
	);
};

export const RootDiv = styled.div`
	display: flex;
`;

export default Root;
