import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = props => {
	return (
		<Container>
			<Line className={props.className}/>
			<SubTitle className={props.className}>
				{props.subTitle}
			</SubTitle>
			<Title className={props.className}>
				{props.title}
			</Title>
			<UnderBar className={props.className}/>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;

const Line = styled.div`
	width: 0px;
	height: 50px;
	border-left: 1px solid #FFFFFF;
	margin-bottom: 50px;
	&.work {
		border-left: 1px solid #FCBC98;
	}
`;

const SubTitle = styled.div`
	color: #FFECE3;
	font-size: 16pt;
	font-weight: 400;
	text-align: center;
	margin-bottom: 14px;
	&.work {
		color: #848383;
	}
`;

const Title = styled.div`
	color: #FFFFFF;
	font-size: 40pt;
	font-weight: 600;
	text-align: center;
	&.work {
		color: #000;
	}
`;

const UnderBar = styled.hr`
	width: 200px;
	border: 1px solid #FFF;
	border-radius: 5px;

	&.work {
		border: 1px solid #FCBC98;
	}
`;

Header.propTypes = {
	title: PropTypes.string,
	subTitle: PropTypes.string,
};

export default Header;
