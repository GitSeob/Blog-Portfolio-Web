import React from 'react';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../store/configureStore';

import Door from '../containers/Door';
import Work from '../containers/Work';
import Footer from '../containers/Footer';

import { useSelector } from 'react-redux';
import { LOAD_PORT_DATA_REQUEST } from '../reducers/portfolio';
import Introduction from '../containers/Introduction';

const Portfolio = ( ) => {
	const { data } = useSelector(state => state.portfolio);

	return (
		<div className="port-wrap">
			<Door />
			<Introduction id="introduction" data={data}/>
			<Work data={data}/>
			<Footer/>
		</div>
	);
};

Portfolio.propTypes = {

};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}
	context.store.dispatch({
		type: LOAD_PORT_DATA_REQUEST,
	})
	context.store.dispatch(END);
	await context.store.sagaTask.toPromise();
})

export default Portfolio;
