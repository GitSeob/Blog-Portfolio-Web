import React from 'react';
import PropTypes from 'prop-types';
import { AEC, EditAttr, AttrName, AttrContent } from '../../css/styledEdit';

const Attr = ({ name, data }) => {
	return (
		<EditAttr>
			<AttrName>
				{name}
			</AttrName>
			<AttrContent>
				{data}
			</AttrContent>
		</EditAttr>
	);
}

const AboutEdit = props => {
	return (
		<AEC>
			<Attr name="Title" data="About Myself" />
			<Attr name="Sub Title" data="Hello" />
			<Attr name="content" data="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
		</AEC>
	);
};

export default AboutEdit;
