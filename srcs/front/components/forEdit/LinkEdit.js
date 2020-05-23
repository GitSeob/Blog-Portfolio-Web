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

const LinkEdit = props => {
	return (
		<AEC>
			<Attr name="Github" data="https://github.com/GitSeob" />
			<Attr name="Blog" data="https://enjoy-with-anjoy.tistory.com/" />
			<Attr name="Footer Comment" data="@made by anjoy" />
		</AEC>
	);
};

LinkEdit.propTypes = {

};

export default LinkEdit;
