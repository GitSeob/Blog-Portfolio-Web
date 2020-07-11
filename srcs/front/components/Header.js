import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ classname, title, subTitle }) => {
	return (
		<Container className={classname}>
			<SubTitle className={classname}>
				{subTitle}
			</SubTitle>
			<Title className={classname}>
				{title}
			</Title>
			<UnderBar className={classname}/>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
	text-align: right;

	&.right {
		align-items: flex-end;
	}

	&.left {
		align-items: flex-start
	}
`;

const Line = styled.div`
	position: absolute;
	top: 0;
	width: 0px;
	height: 50px;
	border-left: 1px solid #FFFFFF;
	margin-bottom: 50px;
	&.work {
		border-left: 1px solid #000;
	}
`;

const SubTitle = styled.span`
	color: white;
	opacity: .5;
	font-size: 24px;
	font-weight: 400;
	speak: none;
	display: block;
	text-align: center;
	margin-bottom: -10px;

	&.work {
		color: #848383;
	}
`;

const Title = styled.span`
	color: #FFFFFF;
	padding-bottom: 16px;
	font-size: 64px;
	text-align: center;

	&.work {
		color: #000;
	}
`;

const UnderBar = styled.hr`
	width: 100px;
	border: 1px solid #45bbe7;
	border-radius: 5px;


`;

Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

export default Header;
