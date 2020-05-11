import React from 'react';
import PropTypes from 'prop-types';
import {Box, TestInner, Filler, Filter} from '../css/styledCss';
import styled from 'styled-components';

const Contact = props => {
	return (
		<Box className='footer'>
			<Filter>
				<Line />
				<ContentText className='talk'>All right, let's talk !</ContentText>
				<Line className='bottom' />
				<ContentText className='email'>anhs0220@gmail.com</ContentText>
				<ContentText className='send'>If you send me an email,<br/>
I will reply to you within 3 days</ContentText>
			</Filter>
		</Box>
	);
};

const Line = styled.div`
	width: 0px;
	height: 100px;
	border-left: 1px solid #FFFFFF;

	&.bottom {
		height: 50px;
	}
`;

const ContentText = styled.div`
	color: #FFFFFF;
	font-weight: 500;

	&.email {
		font-size: 40pt;
		font-weight: 700;
		color: #FCBC84;
		background-color: #FFFFFF;
		padding: 10px 30px;
		border-radius: 15px;
		margin-bottom: 20px;
	}
	&.talk {
		font-size: 20pt;
	}
	&.send {
		font-size: 15pt;
	}
`;

const Bar = styled.hr`
	width: 200px;
	border: 1px solid #FFF;
	border-radius: 5px;
`;

Contact.propTypes = {

};

export default Contact;
