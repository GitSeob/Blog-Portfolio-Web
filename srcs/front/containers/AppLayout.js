import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon'

const AppLayout = ({ children }) => {

	return (
		<>
			<Background>
				{children}
			</Background>
		</>
	);
};

AppLayout.propTypes = {

};

const Background = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	margin: 0;
`;

export default AppLayout;
