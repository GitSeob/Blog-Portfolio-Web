import React from 'react';
import PropTypes from 'prop-types';
import {Box, Filter, UnderLine} from '../css/styledCss';
import Header from '../components/Header';
import Port from '../components/Port';
import Swip from '../components/Swip';

const Work = ({ data }) => {
	return (
		<Box className='work' role='region' className="l-section">
			<Header classname='work' subTitle='Portfolio' title='My works' />
			{/* <Port /> */}
			<div style={{width:'100vw', marginBottom: '20px'}}>
				<Swip data={data}/>
			</div>
			<UnderLine className='work'/>
		</Box>
	);
};

Work.propTypes = {
	data: PropTypes.object,
};

export default Work;
