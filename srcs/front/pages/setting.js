import React from 'react';
import PropTypes from 'prop-types';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/posts';

const Setting = props => {
	return (
		<div>

		</div>
	);
};

Setting.propTypes = {

};

Setting.getInitialProps = (context) => {
	context.store.dispatch({
		type: LOAD_MAIN_POSTS_REQUEST
	})
}

export default Setting;
