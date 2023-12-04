import styled from 'styled-components';

const MOBILE_MODE = process.env.REACT_APP_MOBILE_MODE;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	height: 100%;
	background-image: linear-gradient(to right, lightgray, #7bb1e0);
`;

export const NavBrand = () => {
	return <></>;
};
