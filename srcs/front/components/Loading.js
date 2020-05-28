import React from 'react';
import PropTypes from 'prop-types';

const Loading = props => {
	return (
		<div className="pre-loader">
			<div className="lb1"></div>
			<div className="lb2"></div>
			<div className="lb3"></div>
			<div className="lb4"></div>
			<div className="lb5"></div>
		</div>
	);
};

Loading.propTypes = {

};

export default Loading;
