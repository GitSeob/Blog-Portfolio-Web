import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Editor } from '@toast-ui/react-editor';
import { backUrl } from '../config/config';

const Toast = ({ editorValue, OCV}) => {
	const editorRef = useRef();

	const handleChange = useCallback((e) => {
		OCV(editorRef.current.getInstance().getHtml());
	}, [editorValue]);

	const uploadImage = (blob) => {
		let imageFormData = new FormData();
		const url = backUrl + "/post/images";

		imageFormData.append('image', blob);
		return axios.post(
			url, imageFormData, {
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
			hideModeSwitch={true}
			hooks = {{
				addImageBlobHook : (blob, callback, source) => {
					uploadImage(blob).then(res => {
						callback(res.url);
					})
					return false;
				}
			}}
		/>
	);
};

Toast.propTypes = {

};

export default Toast;
