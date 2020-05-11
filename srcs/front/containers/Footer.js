import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import style from 'styled-components';

const Footer = props => {
	return (
		<div style={{width: '100%', height: '50px'}}>
			<Link href="https://github.com/GitSeob">
				<Linked target="_blank" >
					GITHUB
				</Linked>
			</Link>
		</div>
	);
};

const Linked = style.a`
	margin-left: 10px;
	text-decoration: none;
	font-size: 30pt;
	font-weight: 600;

	&:visited {
		color: black;
	}
`;

Footer.propTypes = {

};

export default Footer;
