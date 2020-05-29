import React from 'react';
import PropTypes from 'prop-types';

import About from '../components/About';
import Ability from '../components/Ability';

const Introduction = ({ id, data }) => {
	return (
		<div id="introduction" className="l-section l-split">
			<About about={data.about}/>
			<Ability abil={data.abilities}/>
		</div>
	);
};

Introduction.propTypes = {

};

export default Introduction;
