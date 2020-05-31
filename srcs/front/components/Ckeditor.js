import React from 'react';
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import PropTypes from 'prop-types';

const Ckeditor = props => {
	return (
		<div className="App">
			<h1> here is editor</h1>
			<CKEditor
				editor={ClassicEditor}
			/>
		</div>
	);
};

Ckeditor.propTypes = {

};

export default Ckeditor;
