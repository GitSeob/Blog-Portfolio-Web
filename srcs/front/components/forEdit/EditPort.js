import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import AboutEdit from './AboutEdit';
import InfoEdit from './InfoEdit';
import LinkEdit from './LinkEdit';
import AbilityEdit from './AbilityEdit';
import WorkEdit from './WorkEdit';

const EditPort = props => {
	const { data } = useSelector(state=>state.portfolio);

	return (
		<div className="middle">
			<div className="edit-menu">
				<li className="edit-list" id="aboutE">
					<a href="#aboutE" className="list-btn">About</a>
					<div className="list-sub-menu">
						<AboutEdit data={data}/>
					</div>
				</li>

				<li className="edit-list" id="abilityE">
					<a href="#abilityE" className="list-btn">Ability</a>
					<div className="list-sub-menu">
						<AbilityEdit data={data}/>
					</div>
				</li>

				<li className="edit-list" id="work">
					<a href="#work" className="list-btn">Work</a>
					<div className="list-sub-menu">
						<WorkEdit data={data}/>
					</div>
				</li>

				<li className="edit-list" id="infomation">
					<a href="#infomation" className="list-btn">Footer</a>
					<div className="list-sub-menu">
						<InfoEdit data={data}/>
					</div>
				</li>
			</div>
		</div>
	);
};

EditPort.propTypes = {

};

export default EditPort;
