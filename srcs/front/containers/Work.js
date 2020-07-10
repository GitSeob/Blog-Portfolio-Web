import React from 'react';
import PropTypes from 'prop-types';
import {Box, Filter, UnderLine} from '../css/styledCss';
import Header from '../components/Header';
import Port from '../components/Port';
import Test from '../components/Test';

const Work = ({ data }) => {
	return (
		<Box className='work' role='region' className="l-section">
			<div data-aos='fade-up'>
				<Header classname='work' subTitle={data.work_sub_title} title={data.work_title} />
			</div>
			<div id="portfolio" className="section-content gallery alternate l-section-holder">
				{data.Works.map((c, i) => {
					return (
						<Test key={(i)} page={c} id={i}/>
					);
				})}
			</div>
		</Box>
	);
};

Work.propTypes = {
	data: PropTypes.object,
};

export default Work;
