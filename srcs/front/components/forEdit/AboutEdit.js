import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AEC, EditAttr, AttrName, AttrContent } from '../../css/styledEdit';
import { Send } from '@material-ui/icons';
import {useInput} from '../../pages/login';

export const Attr = ({ name, value }) => {
	return (
		<EditAttr>
			<AttrName>
				{name}
			</AttrName>
			<AttrContent>
				{value}
			</AttrContent>
		</EditAttr>
	);
}


export const InputAttr = ({ name, rows=1, value, onChangeValue }) => {

	return (
		<EditAttr>
			<AttrName>
				{name}
			</AttrName>
			<input className="edit-input" value={value} type="text" onChange={onChangeValue} />
		</EditAttr>
	);
}

export const TextAttr = ({ name, rows=1, value, onChangeValue }) => {

	return (
		<EditAttr>
			<AttrName>
				{name}
			</AttrName>
			<textarea rows={rows} className="edit-input" value={value} type="text" onChange={onChangeValue} />
		</EditAttr>
	);
}

const AboutEdit = ({ data }) => {
	const [title_value, onChangeTitle] = useInput(data.about_title);
	const [subTitle_value, onChangeSubTitle] = useInput(data.about_sub_title);
	const [content_value, onChangeContent] = useInput(data.about_content);

	return (
		<>
			<AEC>
				<InputAttr name="Title" value={title_value} onChangeValue={onChangeTitle}/>
				<InputAttr name="Sub Title" value={subTitle_value} onChangeValue={onChangeSubTitle}/>
				<TextAttr name="content" value={content_value} onChangeValue={onChangeContent} rows={10}/>
			</AEC>
			<div className="submit-container">
				<button className="submit-attr-btn">
					<Send /> Submit
				</button>
			</div>
		</>
	);
};

export default AboutEdit;
