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


// post_id query를 받으면 어떤 게시물을 수정하는 상태
// 따라서, 해당 게시물의 데이터를 받아서 props로 전탈해주고 각 Input창에 value 값으로 줘야함
// post_id 없이 단순히 posting 페이지로 라우팅 되었다면 새로운 글을 작성하는 것
// index는 음이 아닌 정수로 이루어져 있으므로 -1을 props로 전달한다.
// 따라서, post_id === -1 이면 새로운 게시글을 작성하는 것

Posting.getinitialProps = async (context) => {
	console.log('posting getinitialProps', context.query.post_id);
	const post_id = !context.query.post_id ? -1 : context.query.post_id;
	return { post_id: post_id};
}

Posting.propTypes = {

};

export default Posting;
