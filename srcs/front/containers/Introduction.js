import React from 'react';
import PropTypes from 'prop-types';

import About from '../components/About';
import Ability from '../components/Ability';

const Introduction = ({ data }) => {
	return (
		<div id="introduction" className="l-section l-split">
			<About data={data}/>
			<Ability data={data}/>
		</div>
	);
};

Introduction.propTypes = {

};

export default Introduction;
