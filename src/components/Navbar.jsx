import styled from 'styled-components';
import logo from '../images/placeholder-logo-02.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const Navbar = () => {
	return (
		<>
			<DesktopNavbar />
			<MobileNvbar />
		</>
	);
};

export default Navbar;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopNavbar = () => {
	const navigate = useNavigate();

	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		const position = window.scrollY;
		console.log(`Position: ${position}`);
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<DesktopNavDiv style={{ opacity: `${scrollPosition > 200 ? '0.9' : '1'}` }}>
			<img
				className='logo'
				src={logo}
				alt='logo'
				onClick={() => {
					navigate('/');
				}}
			/>
			<div className='link-container'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/about'>Meet the Team</NavLink>
				<NavLink to='/facilities'>Facilities</NavLink>
				<NavLink to='/lessons-and-boarding'>Lessons & Boarding</NavLink>
				<NavLink to='/contact'>Contact</NavLink>
			</div>
		</DesktopNavDiv>
	);
};

export const DesktopNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgb(18, 17, 31);
	// background-image: linear-gradient(to right, rgb(126, 184, 232), rgb(45, 43, 78));
	display: flex;
	flex-direction: row;
	align-items: center;

	@media screen and (max-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	& > .logo {
		max-height: 100%;
		max-width: 28%;
		margin: 0 1%;
		cursor: pointer;
		border: 2px solid;
		border-color: transparent;

		&:hover {
			transition: 200ms;
			border-color: white;
		}
	}

	& > .link-container {
		width: 68%;
		margin: 0 1%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
`;

export const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: bold;
	text-align: center;
	width: 15%;
	padding: 2px 0;

	&:hover {
		transition: 200ms;
		box-shadow: 0 3px 0 0 white;
	}

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		font-size: calc(min(2.5vw, 2.5vh));
	}

	@media screen and (min-width: ${'1000px'}) {
		font-size: calc(min(3vw, 3vh)) !important;
	}
`;

/*************************************************** MOBILE MODE ***********************************************************************/

export const MobileNvbar = () => {
	return <MobileNavDiv></MobileNavDiv>;
};

export const MobileNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to right, rgb(126, 184, 232), rgb(45, 43, 78));

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	@media screen and (width: ${MOBILE_MODE_LIMIT}) {
		display: inherit;
	}
`;
