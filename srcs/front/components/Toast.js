import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Editor } from '@toast-ui/react-editor';


const Toast = ({ editorValue, OCV}) => {
	const editorRef = useRef();

	const handleChange = useCallback((e) => {
		OCV(editorRef.current.getInstance().getHtml());
	}, [editorValue]);

	const uploadImage = async (blob) => {
		// console.log(blob);
		const imageData = {
			data: blob
		};
		const res = await axios.post('http://localhost:3065/api/image', imageData);
		return (res.imageURL);
	};

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
			hooks = {{
				addImageBlobHook : (file, callback, source) => {
					console.log(file);
					const uploadedImageURL = uploadImage(file);
					callback(uploadedImageURL, "alt text");
					return false;
				}
			}}
		/>
	);
};

Toast.propTypes = {

};

export default Toast;
