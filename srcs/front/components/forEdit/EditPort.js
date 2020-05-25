import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import AboutEdit from './AboutEdit';
import FooterEdit from './FooterEdit';
import LinkEdit from './LinkEdit';
import AbilityEdit from './AbilityEdit';
import WorkEdit from './WorkEdit';

const EditPort = props => {
	const { data } = useSelector(state=>state.portfolio);

	return (
		<div className="middle">
			<div className="edit-menu">
				<li className="edit-list" id="about">
					<a href="#about" className="list-btn">About</a>
					<div className="list-sub-menu">
						<AboutEdit data={data}/>
					</div>
				</li>

				<li className="edit-list" id="ability">
					<a href="#ability" className="list-btn">Ability</a>
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

				<li className="edit-list" id="footer">
					<a href="#footer" className="list-btn">Footer</a>
					<div className="list-sub-menu">
						<FooterEdit data={data}/>
					</div>
				</li>

				<li className="edit-list" id="link">
					<a href="#link" className="list-btn">Link</a>
					<div className="list-sub-menu">
						<LinkEdit data={data}/>
					</div>
				</li>
			</div>
		</div>
	);
};

EditPort.propTypes = {

};

export default EditPort;
