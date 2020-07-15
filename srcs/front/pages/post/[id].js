import React, {useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';
import moment from 'moment';

import wrapper from '../../store/configureStore';
import { LOAD_ONE_POST_REQUEST, REMOVE_POST_REQUEST, LOAD_CATEGORY_POSTS_REQUEST, ON_EDIT, OPEN_POSTING } from '../../reducers/posts';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_ADMIN_REQUEST } from '../../reducers/admin';

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

	const onEditPost = useCallback((e) => {
		e.preventDefault();
		dispatch({ type: ON_EDIT })
		dispatch({ type: OPEN_POSTING })
	})

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
										{moment(postData.createdAt).format('YYYY.MM.DD')}
									</span>
									{(admin && admin.id) === postData.UserId &&
									<div className="edit-post">
										<button onClick={onEditPost}>
											수정
										</button>
										|
										<button onClick={deletePost}>
											삭제
										</button>
									</div>
								}
								</div>
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

const Post = ( ) => {
	const router = useRouter();
	const { id } = router.query;
	const { postData, category_list } = useSelector(state=>state.posts);

	if (postData) {
		return (
			<>
			<Head>
				<title>{postData.title} :: anjoy</title>
				<meta property="og:url" content={`http://localhost:3060/post/${postData.id}`} />
				<meta name="description" content={postData.content} />
				<meta property="og:title" content={`[${postData.title}] 게시글`} />
				<meta property="og:description" content={postData.content} />
			</Head>
			<OnePost postData={postData} category_list={category_list}/>
			</>
		);
	} else {
		return (
			<div>loading...</div>
		);
	}
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}
	const state = context.store.getState();
	if (!state.admin.admin) {
		context.store.dispatch({
			type: LOAD_ADMIN_REQUEST,
		})
	}
	context.store.dispatch({
		type: LOAD_ONE_POST_REQUEST,
		data: context.params.id,
	})

	context.store.dispatch(END);
	await context.store.sagaTask.toPromise();
})

Post.propTypes = {

};

export default Post;
