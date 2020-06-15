import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Editor } from '@toast-ui/react-editor';


const Toast = ({ editorValue, OCV}) => {
	const editorRef = useRef();

	const handleChange = useCallback((e) => {
		OCV(editorRef.current.getInstance().getHtml());
	}, [editorValue]);

	const uploadImage = (blob) => {
		let imageFormData = new FormData();

		imageFormData.append('image', blob);
		return axios.post(
			'http://localhost:3065/api/post/images', imageFormData, {
				withCredentials: true,
			}
		).then(res => {
			return res.data;
		}).catch(e => {
			console.error(e);
		})
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
				addImageBlobHook : (blob, callback, source) => {
					uploadImage(blob).then(res => {
						callback(res.url);
					})
					// let test = URL.createObjectURL(blob);
					// console.log(test);
					// callback(test);
					// callback('http://localhost:3065/IMG_1074Mon Jun 15 2020 18:20:01 GMT+0900 (GMT+09:00).png');
					return false;
				}
			}}
		/>
	);
};

Toast.propTypes = {

};

export default Toast;