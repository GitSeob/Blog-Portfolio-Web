import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Editor } from '@toast-ui/react-editor';


const Toast = ({ editorValue, OCV}) => {
	const editorRef = useRef();

	const handleChange = useCallback((e) => {
		console.log({
			// instance: editorRef.current.getValue(),
			html: editorRef.current.getInstance().getHtml(),
			markdown: editorRef.current.getInstance().getMarkdown()
		});
		OCV(editorRef.current.getInstance().getHtml());
	}, [editorValue]);

	// const uploadImage = (blob) => {
	// 	let imageFormData = new FormData();
	// 	imageFormData.append('image', blob);
	// 	axios.post(
	// 		'http://localhost:3065/api/post/images', imageFormData, {
	// 			withCredentials: true,
	// 		}
	// 	).then(res => {
	// 		console.log(res.data.url);
	// 		return res.data.url;
	// 	})
	// };

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
				addImageBlobHook : (blob, callback, source) => {
					let imageFormData = new FormData();
					imageFormData.append('image', blob);
					axios.post(
						'http://localhost:3065/api/post/images', imageFormData, {
							withCredentials: true,
						}
					).then(res => {
						callback(res.data.url, "alt text");
						return false;
					})
				}
			}}
		/>
	);
};

Toast.propTypes = {

};

export default Toast;
