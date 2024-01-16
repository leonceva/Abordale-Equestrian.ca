import styled from 'styled-components';
import instagram_logo from '../images/instagram-logo.png';
import facebook_logo from '../images/facebook-logo.png';
import email_logo from '../images/email-logo.png';

const SocialMediaLink = (props) => {
	let size = props.size;
	const type = props.type;

	let type_logo;
	let type_url;
	let type_alt;

	switch (type) {
		case 'instagram':
			type_logo = instagram_logo;
			type_url = 'https://www.instagram.com/abordaleequestrian/';
			type_alt = 'Instagram Link';
			break;

		case 'facebook':
			type_logo = facebook_logo;
			type_url = 'https://www.facebook.com/profile.php?id=100085244546170';
			type_alt = 'Facebook Link';
			break;

		case 'email':
			type_logo = email_logo;
			type_url = 'mailto:abordale.equestrian@gmail.com';
			type_alt = 'Email Link';
			break;

		default:
			size = '0px';
			break;
	}

	return (
		<a href={type_url}>
			<Img
				src={type_logo}
				alt={type_alt}
				style={{
					height: `${size}`,
					width: `${size}`,
					borderRadius: `${size}`,
					backgroundColor: 'white',
				}}
			/>
		</a>
	);
};

export const Img = styled.img`
	&:hover {
		transition: 0.5s;
		box-shadow: -2px -2px 10px 0 black, 2px 2px 10px 0 black;
	}
`;

export default SocialMediaLink;
