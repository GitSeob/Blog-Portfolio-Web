import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import { LOAD_ONE_POST_REQUEST, REMOVE_POST_REQUEST, LOAD_CATEGORY_POSTS_REQUEST, ON_EDIT, OPEN_POSTING } from '../reducers/posts';
import { useSelector, useDispatch } from 'react-redux';

const OnePost = ({ id, postData }) => {
	const { admin, isLoggedIn } = useSelector(state=>state.admin);
	const { isRemovedPost } = useSelector(state=>state.posts);
	const dispatch = useDispatch();

	const deletePost = useCallback(() => {
		if (window.confirm('글을 삭제하시겠습니까?')) {
			dispatch({
				type: REMOVE_POST_REQUEST,
				data: postData.id,
			})
		}
	}, []);

	const getCategoryPosts = useCallback(name => () => {
		if (name === ''){
			return ;
		}
		dispatch({
			type: LOAD_CATEGORY_POSTS_REQUEST,
			data: name,
		})
	}, []);

	useEffect(() => {
		if(isRemovedPost) {
			alert('글이 삭제되었습니다!');
			Router.push('/');
		}
	}, [isRemovedPost]);

	const Content = () => {
		return (
			<div
				className = "post-content-html-source"
				dangerouslySetInnerHTML={{
					__html: postData.content
				}}
			/>
		);
	}

	return (
		<>
		<Head>
			<title>post page</title>
			<meta property="og:url" content={`http://localhost:3060/post/${id}`} />
		</Head>
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
				<li className="category-content-area">
					<div className="area-view-content">
						<div className="article-content">
							<div className="post-info-post">
								<div className="post-link-title title-view">
									{postData.title}
								</div>
								<div className="view-info-post">
									<Link href={`/category/${postData.Category ? postData.Category.name : '/'}`}>
										<a className="post-link-category">
											<span className="post-category">
												{postData.Category ? postData.Category.name : '카테고리없음'}
											</span>
										</a>
									</Link>
									<span className='post-date'>
										{postData.createdAt}
									</span>
								</div>
								{(admin && admin.id) === postData.UserId &&
									<div className="edit-post">
										<button onClick={() => {
											dispatch({ type: ON_EDIT })
											dispatch({ type: OPEN_POSTING })
										}}>
											수정
										</button>
										|
										<button onClick={deletePost}>
											삭제
										</button>
									</div>
								}
							</div>
							<div className="article-view">
								<Content />
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		</>
	);
}

const Post = ({ id }) => {
	const { postData, category_list } = useSelector(state=>state.posts);

	if (postData) {
		return (
			<>
			<OnePost postData={postData} category_list={category_list}/>
			</>
		);
	} else {
		return (
			<div>loading...</div>
		);
	}
};

Post.getInitialProps = async ( context ) =>{
	context.store.dispatch({
		type: LOAD_ONE_POST_REQUEST,
		data: context.query.id,
	})

	return { id: parseInt(context.query.id, 10)}
};

Post.propTypes = {

};

export default Post;
