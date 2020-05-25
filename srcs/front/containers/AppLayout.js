import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon'

const AppLayout = ({ children }) => {

	return (
			<Background>
				{children}
			</Background>
	);
};

AppLayout.propTypes = {

};

const Body = {
	position: 'relative',
	minHeight: '100%',
	width: '100vw',
	height: '100%',
	minWidth: '360px',
	overflowY: 'auto',
	color: '#141414',
	testAlign: 'center',
	margin: 0,
	padding: 0,
	fontWeight: 400,
	lineHeight: 1.5,
};

const Background = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	margin: 0;
`;

export default AppLayout;
