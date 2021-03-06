import React ,{useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';
import { END } from 'redux-saga';
import moment from 'moment';

import wrapper from '../store/configureStore';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST, LOAD_CATEGORY_REQUEST } from '../reducers/posts';
import { LOAD_ADMIN_REQUEST } from '../reducers/admin';
import { LOAD_INFORMATION_REQUEST } from '../reducers/information';

export const PostList = ({ mainPosts, boardTitle }) => {
	return (
		<>
		<div className="post-category-list index-type-common index-type-horizontal">
			<h2 className="post-title-category">
				{boardTitle}
			</h2>
		</div>
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
			{
				mainPosts.map((c, i) => {
					return (
						<li key={(i)} className="list-horizontal-item">
							<div className="article-content post-list">
								<div className="thumbnail-zone">
									<Link href="/post/[id]" as={`/post/${c.id}`} prefetch={false}>
										<a
											className="thumbnail-post" style={{
											backgroundImage: `url(\'${c.thumbnail_img}\')`,
										}}></a>
									</Link>
								</div>
								<div className="post-box-content">
									<Link href="/post/[id]" as={`/post/${c.id}`} prefetch={false}>
										<a className="post-link-title">
											<strong className="post-title-post">
												{c.title}
											</strong>
										</a>
									</Link>
									<div className="post-info-post post-list">
										<Link href="/category/[name]" as={`/category/${c.Category.name}`} prefetch={false}>
											<a className="post-category">
													{c.Category && c.Category.name}
											</a>
										</Link>
										<div className="post-date">
											{moment(c.createdAt).format('YYYY.MM.DD')}
										</div>
									</div>
									<Link href="/post/[id]" as={`/post/${c.id}`} prefetch={false}>
										<a
											className="post-link-article post-txt-container">
											<p className="post-txt-post">
												{c.thumbnail_content}
											</p>
										</a>
									</Link>
								</div>
							</div>
						</li>
						);
					})
				}
			</ul>
		</div>
		</>
	);
}

const Blog = () => {
	const {mainPosts, boardTitle, hasMorePosts, isLoadingPosts } = useSelector(state=>state.posts)
	const dispatch = useDispatch();

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 180) {
				if (hasMorePosts && !isLoadingPosts) {
					const lastId = mainPosts[mainPosts.length - 1]?.id;
					dispatch({
						type: LOAD_MAIN_POSTS_REQUEST,
						lastId,
					})
				}
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	}, [hasMorePosts, isLoadingPosts, mainPosts]);

	return (
		<PostList mainPosts={mainPosts} boardTitle={boardTitle}/>
	);
}

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
		type: LOAD_MAIN_POSTS_REQUEST,
	});
	context.store.dispatch({
		type: LOAD_CATEGORY_REQUEST,
	})
	context.store.dispatch({
		type: LOAD_INFORMATION_REQUEST,
	})

	context.store.dispatch(END);
	await context.store.sagaTask.toPromise();
})

Blog.propTypes = {

};

export default Blog;
