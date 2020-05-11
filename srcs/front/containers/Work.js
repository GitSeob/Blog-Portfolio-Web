import React from 'react';
import PropTypes from 'prop-types';
import {Box, Filter, UnderLine} from '../css/styledCss';
import Header from '../components/Header';
import Port from '../components/Port';
import Swip from '../components/Swip';

const Work = props => {
	return (
		<Box className='work'>
			<Filter className='notFilter'>
				<Header className='work' subTitle='Portfolio' title='My works' />
				{/* <Port /> */}
				<div style={{width:'100vw', marginBottom: '20px'}}>
					<Swip />
				</div>
				<UnderLine className='work'/>
			</Filter>
		</Box>
	);
};

Work.propTypes = {

};

export default Work;
