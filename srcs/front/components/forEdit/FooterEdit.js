import React from 'react';
import PropTypes from 'prop-types';
import {useInput} from '../../pages/login';
import { AEC } from '../../css/styledEdit';
import { InputAttr } from './AboutEdit';
import { Send } from '@material-ui/icons';

const FooterEdit = ({ data }) => {
	const [title_value, onChangeTitle] = useInput(data.footer.title);
	const [email_value, onChangeEmail] = useInput(data.footer.email);
	const [comment_value, onChangeComment] = useInput(data.footer.comment);

	return (
		<>
			<AEC>
				<InputAttr name="Title" value={title_value} onChangeValue={onChangeTitle}/>
				<InputAttr name="E-mail" value={email_value} onChangeValue={onChangeEmail}/>
				<InputAttr rows={3} name="Comment" value={comment_value} onChangeValue={onChangeComment}/>
			</AEC>
			<div className="submit-container">
				<button className="submit-attr-btn">
					<Send /> Submit
				</button>
			</div>
		</>
	);
};

FooterEdit.propTypes = {

};

export default FooterEdit;
