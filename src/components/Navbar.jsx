import styled from 'styled-components';
import logo_highRes from '../images/logo-custom-transparent.png';
import logo_lowRes from '../images/logo-custom-transparent-lazy.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MOBILE_MODE_LIMIT = process.env.REACT_APP_MOBILE_MODE;

const Navbar = () => {
	const [scrollPosition, setPosition] = useState(0);

	useEffect(() => {
		function updatePosition() {
			setPosition(window.scrollY);
		}
		window.addEventListener('scroll', updatePosition);
		updatePosition();

		return () => {
			window.removeEventListener('scroll', updatePosition);
		};
	}, []);

	return (
		<>
			<DesktopNavbar scrollPosition={scrollPosition} />
			<MobileNavbar scrollPosition={scrollPosition} />
		</>
	);
};

export default Navbar;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopNavbar = (props) => {
	const navigate = useNavigate();

	const scrollPosition = props.scrollPosition;
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<DesktopNavDiv
			style={{
				backgroundColor: `${
					scrollPosition > 100 ? 'rgba(37, 39, 69, 0.9)' : 'rgba(37, 39, 69, 1)'
				}`,
			}}>
			<img
				className={`logo ${!isLoaded ? 'show' : 'hide'}`}
				src={logo_lowRes}
				alt='Abordale Equestrian Logo Low Res'
				onClick={() => {
					navigate('/');
				}}
			/>
			<img
				className={`logo ${isLoaded ? 'show' : 'hide'}`}
				src={logo_highRes}
				alt='Abordale Equestrian Logo High Res'
				onClick={() => {
					navigate('/');
				}}
				onLoad={() => {
					setIsLoaded(true);
				}}
			/>
			<div className='link-container'>
				<NavLink
					className='heading-font'
					to='/about'>
					Meet the Team
				</NavLink>
				<NavLink
					className='heading-font'
					to='/facilities'>
					Facilities
				</NavLink>
				<NavLink
					className='heading-font'
					to='/lessons-and-boarding'>
					Lessons & Boarding
				</NavLink>
				<NavLink
					className='heading-font'
					to='/horse-shows'>
					Horse Shows
				</NavLink>
				<NavLink
					className='heading-font'
					to='/contact'>
					Contact
				</NavLink>
			</div>
		</DesktopNavDiv>
	);
};

export const DesktopNavDiv = styled.div`
	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: hidden;
		justify-content: space-between;
		position: relative;

		& > .logo {
			cursor: pointer;
			left: 0;
		}

		& > .show {
			opacity: 1;
			transition: opacity 500ms ease-in 50ms;

			@media screen and (max-width: 900px) {
				position: absolute;
				max-height: 155px;
				min-width: 200px;
			}

			@media screen and ((min-width: 900px) or (width: 900px)) {
				max-height: 250px;
				max-width: 30%;
				min-width: 350px;
			}
		}
		& > .hide {
			height: 0px;
			opacity: 0;
			transition: opacity 500ms ease-in 50ms;
		}

		& > .link-container {
			min-width: calc(100vw - 350px);
			max-width: 65%;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: end;
			align-items: center;
		}
	}
	@media screen and ((max-width: ${MOBILE_MODE_LIMIT} )or (width: ${MOBILE_MODE_LIMIT})) {
		display: none;
	}
`;

export const NavLink = styled(Link)`
	color: white;
	text-decoration: none;
	font-weight: bold;
	text-align: center;
	margin-right: 5%;

	&:hover {
		transition: 200ms;
		box-shadow: 0 3px 0 0 white;
	}

	@media screen and (min-width: ${MOBILE_MODE_LIMIT}) {
		font-size: medium;
	}

	@media screen and (min-width: ${'1000px'}) {
		font-size: large;
	}
	@media screen and (min-width: ${'1400px'}) {
		font-size: large;
	}
`;

/*************************************************** MOBILE MODE ***********************************************************************/

export const MobileNavbar = (props) => {
	const navigate = useNavigate();
	const [isExpanded, setIsExpanded] = useState(false);

	const scrollPosition = props.scrollPosition;
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<MobileNavDiv
			style={{
				backgroundColor: `${
					scrollPosition > 100 ? 'rgba(37, 39, 69, 0.9)' : 'rgba(37, 39, 69, 1)'
				}`,
			}}>
			<img
				className={`logo ${!isLoaded ? 'show' : 'hide'}`}
				src={logo_lowRes}
				alt='Abordale Equestrian Logo Low Res'
				onClick={() => {
					navigate('/');
				}}
			/>
			<img
				className={`logo ${isLoaded ? 'show' : 'hide'}`}
				src={logo_highRes}
				alt='Abordale Equestrian Logo High Res'
				onClick={() => {
					navigate('/');
				}}
				onLoad={() => {
					setIsLoaded(true);
				}}
			/>
			<div className='menu'>
				<NavButton
					isExpanded={isExpanded}
					setIsExpanded={setIsExpanded}
				/>
			</div>
		</MobileNavDiv>
	);
};

export const MobileNavDiv = styled.div`
	display: none;

	@media screen and (max-width: ${MOBILE_MODE_LIMIT}) {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;

		& > .logo {
			margin: 0%;

			&:hover {
				cursor: pointer;
			}
		}

		& > .show {
			height: 150px;
			opacity: 1;
			transition: opacity 500ms ease-in 50ms;
		}
		& > .hide {
			height: 0px;
			width: 0px;
			opacity: 0;
			transition: opacity 500ms ease-in 50ms;
			position: absolute;
		}

		& > .menu {
			max-width: 10%;
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
				}}>
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
		font-size: large;
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
						<Link
							to='/'
							className='expanded-link'>
							Home
						</Link>
						<Link
							to='/about'
							className='expanded-link'>
							Meet the Team
						</Link>
						<Link
							to='/facilities'
							className='expanded-link'>
							Facilities
						</Link>
						<Link
							to='/lessons-and-boarding'
							className='expanded-link'>
							Lessons and Boarding
						</Link>
						<Link
							to='/horse-shows'
							className='expanded-link'>
							Horse Shows
						</Link>
						<Link
							to='/contact'
							className='expanded-link'>
							Contact
						</Link>
					</>
				)}
			</div>
		</>
	);
};
