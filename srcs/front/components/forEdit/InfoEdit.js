import React from 'react';
import PropTypes from 'prop-types';
import {useInput} from '../../pages/login';
import { AEC } from '../../css/styledEdit';
import { InputAttr } from './AboutEdit';
import { Send } from '@material-ui/icons';

const InfoEdit = ({ data }) => {
	const [email, OCEmail] = useInput(data.email);
	const [github, OCGithub] = useInput(data.github);
	const [kakao, OCKakao] = useInput(data.kakao);
	const [comment, OCComment] = useInput(data.comment)

	return (
		<>
			<AEC>
				<InputAttr name="E-mail" value={email} onChangeValue={OCEmail}/>
				<InputAttr name="Github URL" value={github} onChangeValue={OCGithub}/>
				<InputAttr name="kakao id" value={kakao} onChangeValue={OCKakao}/>
				<InputAttr name="Comment" value={comment} onChangeValue={OCComment}/>
			</AEC>
			<div className="submit-container">
				<button className="submit-attr-btn">
					<Send /> Submit
				</button>
			</div>
		</>
	);
};

InfoEdit.propTypes = {

};

export default InfoEdit;
