import React from 'react';
import PropTypes from 'prop-types';
import {useInput} from '../LoginForm';
import { AEC } from '../../css/styledEdit';
import { InputAttr } from './AboutEdit';
import { Send } from '@material-ui/icons';

const LinkEdit = ({ data }) => {
	const [github_value, onChangeGithub] = useInput(data.link.github);
	const [blog_value, onChangeBlog] = useInput(data.link.blog);
	const [comment_value, onChangeComment] = useInput(data.link.comment);

	return (
		<>
			<AEC>
				<InputAttr name="Github" value={github_value} onChangeValue={onChangeGithub}/>
				<InputAttr name="Blog" value={blog_value} onChangeValue={onChangeBlog}/>
				<InputAttr name="Footer Comment" value={comment_value} onChangeValue={onChangeComment} />
			</AEC>
			<div className="submit-container">
				<button className="submit-attr-btn">
					<Send /> Submit
				</button>
			</div>
		</>
	);
};

LinkEdit.propTypes = {

};

export default LinkEdit;
