import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ classname, title, subTitle }) => {
	return (
		<Container id="header" className={"section-heading " + classname}>
			<SubTitle className={classname}>
				{subTitle}
			</SubTitle>
			<Title className={"section-heading-title " + classname }>
				{title}
			</Title>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: inherit;
	margin-bottom: 20px;
	text-align: inherit;
`;


const SubTitle = styled.span`
	color: white;
	opacity: .5;
	font-size: 24px;
	font-weight: 400;
	speak: none;
	display: block;
	margin-bottom: -10px;

	@media screen and (max-width: 640px) {
		font-size: 16px;
	}
	&.work {
		color: #848383;
	}
`;

const Title = styled.span`
	color: #FFFFFF;
	padding-bottom: 16px;
	font-size: 64px;
	position: relative;
	@media screen and (max-width: 640px) {
		font-size: 39px;
	}
	&.work {
		color: #000;
		&::after {
			margin-left: -.625em;
			left: 50%
		}
	}

	&::after {
		background: #45bbe7;
		border-radius: .25em;
		display: block;
		width: 1.25em;
		height: 2px;
		position: absolute;
		bottom: 0;
		content: "";
		@media screen and (max-width: 1259px) {
			left: auto;
		}
	}

	&.about::after {
		right: 0;
		margin: 0;
	}
	&.ability::after {
		margin: 0;
		left: 0;
	}
`;


Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

export default Header;
