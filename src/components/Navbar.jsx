import styled from 'styled-components';
import logo from '../images/placeholder-logo-02.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const Navbar = () => {
	return (
		<>
			<DesktopNavbar />
			<MobileNavbar />
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
				alt='Abordale Equestrian Logo'
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

export const MobileNavbar = () => {
	const navigate = useNavigate();
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<MobileNavDiv>
			<img
				src={logo}
				alt='Abordale Equestrian Logo'
				className='logo'
				onClick={() => {
					navigate('/');
				}}
			/>
			<div className='menu'>
				Menu
				<NavButton isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
			</div>
		</MobileNavDiv>
	);
};

export const MobileNavDiv = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgb(18, 17, 31);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-size: calc(max(2.5vw, 2.5vh));

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		display: none;
	}

	@media screen and (width: ${MOBILE_MODE_LIMIT}) {
		display: inherit;
	}

	& > .logo {
		max-height: 100%;
		max-width: 40%;
		margin-left: 3%;

		&:hover {
			cursor: pointer;
		}
	}

	& > .menu {
		flex: 1;
		height: 100%;
		margin-right: 3%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: end;
		color: white;

		& > .dropdown {
		}
	}
`;

export const NavButton = (props) => {
	const isExpanded = props.isExpanded;
	const setIsExpanded = props.setIsExpanded;

	const handleClick = () => {
		document.addEventListener(
			'click',
			(e) => {
				e.preventDefault();
				e.stopPropagation();
				setIsExpanded(false);
			},
			{ once: true }
		);
	};

	return (
		<NavButtonDiv>
			<div
				className={isExpanded ? 'change-button-container' : 'button-container'}
				onClick={() => {
					if (isExpanded === true) {
						setIsExpanded(false);
					} else {
						setIsExpanded(true);
						document.addEventListener(
							'click',
							(e) => {
								e.preventDefault();
								e.stopPropagation();
								handleClick();
							},
							{ once: true }
						);
					}
				}}
			>
				<div className={isExpanded ? 'change-bar-1' : 'bar-1'} />
				<div className={isExpanded ? 'change-bar-2' : 'bar-2'} />
				<div className={isExpanded ? 'change-bar-3' : 'bar-3'} />
			</div>
			<ModalMenu isExpanded={isExpanded} />
		</NavButtonDiv>
	);
};

export const NavButtonDiv = styled.div`
	margin-right: 5%;
	margin-left: 5%;

	& > .button-container {
		cursor: pointer;
		border: 2px solid white;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		position: relative;
		background-color: rgb(27, 77, 103);

		& > .bar-1 {
			width: 30px;
			height: 2px;
			background-color: white;
			position: absolute;
			left: 5px;
			top: 10px;
			transition: 0.6s;
		}
		& > .bar-2 {
			width: 30px;
			height: 2px;
			background-color: white;
			position: absolute;
			left: 5px;
			top: 19px;
			transition: 0.6s;
		}
		& > .bar-3 {
			width: 30px;
			height: 2px;
			background-color: white;
			position: absolute;
			left: 5px;
			top: 28px;

			transition: 0.6s;
		}
	}

	& > .change-button-container {
		cursor: pointer;
		border: 2px solid white;
		width: 40px;
		height: 40px;
		border-radius: 10px;
		position: relative;
		background-color: rgb(27, 77, 103);

		& > .change-bar-1 {
			width: 30px;
			height: 2px;
			background-color: white;
			transform: rotate(-45deg);
			transition: 0.6s;
			position: absolute;
			left: 5px;
			top: 19px;
		}
		& > .change-bar-3 {
			width: 30px;
			height: 2px;
			background-color: white;
			transform: rotate(45deg);
			transition: 0.6s;
			position: absolute;
			left: 5px;
			top: 19px;
		}
	}

	& > .expanded-menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgb(27, 77, 103);
		border: 2px solid white;
		border-radius: 10px;
		position: absolute;
		z-index: 1;
		width: 220px;
		right: 5.5%;
		top: calc(100% - 20px);
		font-size: calc(max(2.2vh, 2.2vw));
		overflow: hidden;

		& > .expanded-link {
			padding: 5% 0;
			text-decoration: none;
			color: white;
			width: 100%;
			text-align: center;

			&:hover {
				background-color: rgb(17, 56, 72);
			}
		}
	}
	& > .expanded-menu-hidden {
		height: 0px;
		transition: 0s all;
	}
`;

export const ModalMenu = (props) => {
	const isExpanded = props.isExpanded;

	return (
		<>
			<div className={isExpanded ? 'expanded-menu' : 'expanded-menu-hidden'}>
				{isExpanded && (
					<>
						<Link to='/' className='expanded-link'>
							Home
						</Link>
						<Link to='/about' className='expanded-link'>
							Meet the Team
						</Link>
						<Link to='/facilities' className='expanded-link'>
							Facilities
						</Link>
						<Link to='lessons-and-boarding' className='expanded-link'>
							Lessons and Boarding
						</Link>
						<Link to='/contact' className='expanded-link'>
							Contact
						</Link>
					</>
				)}
			</div>
		</>
	);
};
