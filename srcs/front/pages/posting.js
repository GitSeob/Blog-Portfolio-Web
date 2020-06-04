import React from 'react';
import dynamic from 'next/dynamic'

const Ckeditor = dynamic(() => import ("../components/Ckeditor"), {
	ssr: false
})

const Posting = ({ post_id }) => {
	return (
		<Ckeditor />
	);
};

Posting.getinitialProps = async (context) => {
	console.log('posting getinitialProps', context.query.post_id);
	const post_id = !context.query.post_id ? -1 : context.query.post_id;
	return { post_id: post_id};
}

Posting.propTypes = {

};

export default Posting;
