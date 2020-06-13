import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Editor } from '@toast-ui/react-editor';


const Toast = ({ editorValue, OCV}) => {
	const editorRef = useRef();

	const handleChange = useCallback((e) => {
		OCV(editorRef.current.getInstance().getHtml());
	}, [editorValue]);


	return (
		<Editor
			initialValue={editorValue}
			previewStyle="vertical"
			height="600px"
			initialEditType="wysiwyg"
			placeholder="이곳에 글을 작성하세요"
			useCommandShortcut={true}
			ref={editorRef}
			onChange={handleChange}
		/>
	);
};

Toast.propTypes = {

};

export default Toast;
