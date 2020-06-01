import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic'
// import CKEditor from '@ckeditor/ckeditor5-react'
import { useInput } from './login';

import dynamic from 'next/dynamic'
// import Ckeditor from '../components/Ckeditor'

const Ckeditor = dynamic(() => import ("../components/Ckeditor"), {
	ssr: false
})



const Posting = props => {
	return (
		<Ckeditor />
	);
};

Posting.propTypes = {

};

export default Posting;
