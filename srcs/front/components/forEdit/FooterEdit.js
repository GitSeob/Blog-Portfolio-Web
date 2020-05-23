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
const FooterEdit = props => {
	return (
		<AEC>
			<Attr name="Title" data="All right, let's talk !" />
			<Attr name="E-mail" data="anhs0220@gmail.com" />
			<Attr name="Comment" data="If you send me an email,\nI will reply to you within 3 days" />
		</AEC>
	);
};

FooterEdit.propTypes = {

};

export default FooterEdit;
