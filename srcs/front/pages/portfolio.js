import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Door from '../containers/Door';
import Work from '../containers/Work';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { LOAD_DATA_REQUEST } from '../reducers/portfolio';
import Introduction from '../containers/Introduction';

const Portfolio = props => {
	const dispatch = useDispatch();
	const { data, isLoaded } = useSelector(state => state.portfolio);

	return (
		<Background>
			<Door />
			<Introduction id="introduction" data={data}/>
			<Work data={data}/>
			<Contact />
			<Footer />
		</Background>
	);
};

const Background = styled.div`
	position: relative;
	width: 100%;
	margin: 0;
`;

Portfolio.propTypes = {

};

Portfolio.getInitialProps = async ( context ) => {
	context.store.dispatch({
		type: LOAD_DATA_REQUEST,
	})
}

export default Portfolio;
