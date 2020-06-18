import React ,{useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Router from 'next/router';

import Posting from '../containers/Posting';
import {Close, Menu, Search, Edit} from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST, LOAD_CATEGORY_POSTS_REQUEST, LOAD_CATEGORY_REQUEST } from '../reducers/posts';

export const PostList = ({ mainPosts, boardTitle }) => {
	const dispatch = useDispatch();

	const getCategoryPosts = useCallback(name => () => {
		if (name === ''){
			return ;
		}
		Router.push({ pathname: '/category', query: { name: name } }, `/category/${name}`);
	}, []);

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
							<div className="article-content">
								<div className="thumbnail-zone">
									<Link href={{
										pathname: '/post',
										query: {id : c.id},
										}}
										as={`/post/${c.id}`}
									>
										<a
											className="thumbnail-post" style={{
											backgroundImage: `url(\'${c.thumbnail_img}\')`,
										}}></a>
									</Link>
								</div>
								<div className="post-box-content">
									<Link 	href={{
										pathname: '/post',
										query: {id: c.id},
										}}
										as={`/post/${c.id}`}
										>
										<a
											className="post-link-title">
											<strong className="post-title-post">
												{c.title}
											</strong>
										</a>
									</Link>
									<div className="post-info-post">
										<button className="post-link-category" onClick={getCategoryPosts(c.Category ? c.Category.name : '')}>
											<span className="post-category">
												{c.Category && c.Category.name}
											</span>
										</button>
										<div className="post-date">
											{c.createdAt}
										</div>
									</div>
									<Link href={{
										pathname: '/post',
										query: {id: c.id},
										}}
										as={`/post/${c.id}`}
									>
										<a
											className="post-link-article">
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
	const {mainPosts, boardTitle} = useSelector(state=>state.posts)

	return (
		<PostList mainPosts={mainPosts} boardTitle={boardTitle}/>
	);
}

Blog.getInitialProps = async ( context ) =>{
	context.store.dispatch({
		type: LOAD_MAIN_POSTS_REQUEST,
	});
	context.store.dispatch({
		type: LOAD_CATEGORY_REQUEST,
	})
}

Blog.propTypes = {

};

export default Blog;
