import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Door from '../containers/Door';
import About from '../containers/About';
import Ability from '../containers/Ability';
import Work from '../containers/Work';
import Contact from '../containers/Contact';
import Footer from '../containers/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { LOAD_DATA_REQUEST, ADD_DUMY } from '../reducers/portfolio';


const Home = props => {
	const dispatch = useDispatch();
	const { data } = useSelector(state => state.portfolio);

	useEffect(() => {
		dispatch({
			type: ADD_DUMY
		})
	}, []);

	// console.log( data);

	return (
		<>
			<Door />
			<About about={data.about}/>
			<Ability abil={data.abilities}/>
			{/* { data ? <Work work={data.work}/> : <></>} */}
			<Work data={data}/>
			<Contact />
			<Footer />
		</>
	);
};

Home.getInitialProps = async ( context ) => {
	context.store.dispatch({
		type: LOAD_DATA_REQUEST,
	})
}

export default Home;
