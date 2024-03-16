import DesktopLayout from '../layouts/DesktopLayout';
import MobileLayout from '../layouts/MobileLayout';
import styled from 'styled-components';
import sean_img_highRes from '../images/about/about_sean_high_res.jpg';
import brandon_img_highRes from '../images/about/about_brandon_high_res.jpg';
import sean_img_lowRes from '../images/about/about_sean_low_res.jpg';
import brandon_img_lowRes from '../images/about/about_brandon_low_res.jpg';
import Image from '../components/Image';

const About = () => {
	return (
		<>
			<DesktopLayout content={<DesktopContent />} />
			<MobileLayout content={<MobileContent />} />
		</>
	);
};

export default About;

/************************************************************* DESKTOP MODE ****************************************************************************/

export const DesktopContent = () => {
	const styleWrapper = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		overflowX: 'hidden',
	};

	const styleImage = {
		position: 'absolute',
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
		border: '2px solid #333',
	};

	return (
		<DesktopDiv>
			<div className='staff'>
				<div className='staff-container'>
					<div className='bio-container'>
						<div className='image'>
							<Image
								styleWrapper={styleWrapper}
								styleImage={styleImage}
								lowResSrc={sean_img_lowRes}
								highResSrc={sean_img_highRes}
							/>
						</div>
						<h2>Sean Jenkin</h2>
						<h3>Owner and Head Coach</h3>
						<p className='bio'>
							Sean has been an equestrian coach for 25 years in Ontario and Florida.
							He has coached children and adults up to 1.25m in jumpers, 4-foot
							working hunters (gold), intermediate (3-star) in eventing, Prix St
							Georges in dressage, and Level 4 in para-dressage. His coaching
							philosophy is centered around creating a safe, inclusive, and supportive
							environment for all riders, aiming to nurture their passion for horses
							and the equestrian sport. He is committed to guiding each rider in
							achieving their personal goals, whether they are pursuing riding for
							competitive success or as a leisure activity, ensuring a balanced
							approach that caters to individual aspirations and skill levels.
						</p>
					</div>
				</div>
				<div className='staff-container'>
					<div className='bio-container'>
						<div className='image'>
							<Image
								styleWrapper={styleWrapper}
								styleImage={styleImage}
								lowResSrc={brandon_img_lowRes}
								highResSrc={brandon_img_highRes}
							/>
						</div>
						<h2>Brandon Fehér</h2>
						<h3>Owner and Barn Manager</h3>
						<p className='bio'>
							Brandon is a seasoned horse-care professional with nearly 20 years of
							experience, including leadership roles as a barn manager at Dewmont
							Farms and Prestige Woods in the Ottawa area. His approach to horse care
							is grounded in the philosophy that horses thrive when allowed to spend
							as much time as possible outdoors, conditions permitting. Brandon is
							dedicated to ensuring the health and happiness of every horse, crafting
							specialized feed plans that cater to the unique requirements of each
							animal. He believes that the essence of a great riding experience is
							rooted in the welfare of the horse, with a focus on maintaining their
							contentment and health.
						</p>
					</div>
				</div>
			</div>
		</DesktopDiv>
	);
};

export const DesktopDiv = styled.div`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;

	& > .staff {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin-top: 2.5%;

		& > .staff-container {
			width: 100%;
			margin-bottom: 2.5%;
			display: flex;
			flex-direction: row;
			justify-content: start;
			align-items: center;
			border: 2px solid black;
			background-color: rgba(220, 220, 220, 0.8);

			& > .bio-container {
				padding: 0 2.5%;
				height: 100%;
				flex: 1;
				overflow-y: auto;

				& > .image {
					aspect-ratio: 1/1;
					width: calc(min(60%, 60vh));
					float: left;
					position: relative;
					margin: 0.5em 0;
				}

				& > h2,
				h3 {
					width: 100%;
					text-align: left;
					margin: 0.5em 0 0;
				}

				& > .bio {
					font-size: 1.1em;
					line-height: 125%;
				}
			}
		}
	}
`;

/************************************************************* MOBILE MODE ****************************************************************************/

export const MobileContent = () => {
	const styleWrapper = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		overflowX: 'hidden',
	};

	const styleImage = {
		position: 'absolute',
		width: 'auto',
		height: 'auto',
		maxHeight: 'calc(100% - 4px)',
		maxWidth: 'calc(100% - 4px)',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '2',
		border: '2px solid #333',
	};

	return (
		<MobileDiv>
			<div className='staff'>
				<div className='staff-container'>
					<h2>Sean Jenkin</h2>
					<h3>Owner and Head Coach</h3>
					<div className='image'>
						<Image
							styleWrapper={styleWrapper}
							styleImage={styleImage}
							lowResSrc={sean_img_lowRes}
							highResSrc={sean_img_highRes}
						/>
					</div>
					<p className='bio'>
						Sean has been an equestrian coach for 25 years in Ontario and Florida. He
						has coached children and adults up to 1.25m in jumpers, 4-foot working
						hunters (gold), intermediate (3-star) in eventing, Prix St Georges in
						dressage, and Level 4 in para-dressage. His coaching philosophy is centered
						around creating a safe, inclusive, and supportive environment for all
						riders, aiming to nurture their passion for horses and the equestrian sport.
						He is committed to guiding each rider in achieving their personal goals,
						whether they are pursuing riding for competitive success or as a leisure
						activity, ensuring a balanced approach that caters to individual aspirations
						and skill levels.
					</p>
				</div>
				<div className='staff-container'>
					<h2>Brandon Fehér</h2>
					<h3>Owner and Barn Manager</h3>
					<div className='image'>
						<Image
							styleWrapper={styleWrapper}
							styleImage={styleImage}
							lowResSrc={brandon_img_lowRes}
							highResSrc={brandon_img_highRes}
						/>
					</div>
					<p className='bio'>
						Brandon is a seasoned horse-care professional with nearly 20 years of
						experience, including leadership roles as a barn manager at Dewmont Farms
						and Prestige Woods in the Ottawa area. His approach to horse care is
						grounded in the philosophy that horses thrive when allowed to spend as much
						time as possible outdoors, conditions permitting. Brandon is dedicated to
						ensuring the health and happiness of every horse, crafting specialized feed
						plans that cater to the unique requirements of each animal. He believes that
						the essence of a great riding experience is rooted in the welfare of the
						horse, with a focus on maintaining their contentment and health.
					</p>
				</div>
			</div>
		</MobileDiv>
	);
};

export const MobileDiv = styled.div`
	width: 100%;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;

	& > .staff {
		width: 95%;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: center;
		margin: 2.5% 2.5% 0;

		& > .staff-container {
			width: 95%;
			height: max-content;
			border: 2px solid black;
			background-color: rgba(220, 220, 220, 0.8);
			margin-bottom: 5%;
			display: flex;
			flex-direction: column;
			justify-content: start;
			align-items: center;

			& > .image {
				width: 100%;
				height: 50vh;
				position: relative;
			}

			& > h2,
			h3 {
				padding: 0.5em;
				text-align: center;
				margin: 0;
			}

			& > .bio {
				padding: 0 2.5%;
				text-align: justify;
			}
		}
	}
`;
