import React from 'react';
import dynamic from 'next/dynamic'
// import Ckeditor from '../components/Ckeditor'

const Editor = dynamic(() => import("../components/Ckeditor"), {
	ssr: false
})



const Posting = props => {
	return (
		<div style={{width: '100%', height: '100%'}}>
			<h2>nextjs + ckeditor5</h2>
			<Editor />
		</div>
	);
};

Posting.propTypes = {

};

export default Posting;
