import React from 'react';
import PropTypes from 'prop-types';

const BlogManage = props => {
	return (
		<form>
			<div className="manage-line">
				<label className="manage-content-name" htmlFor="user-nickname" >블로그 타이틀</label>
				<br />
				<input name="user-nickname" placeholder="블로그 타이틀" required />
			</div>
		</form>
	);
};

BlogManage.propTypes = {

};

export default BlogManage;
