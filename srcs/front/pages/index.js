import React ,{useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {Close, Menu, Search, Edit} from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/posts';

const PostList = ({ mainPosts }) => {

	return (
		<>
		<div className="post-category-list index-type-common index-type-horizontal">
			<h2 className="post-title-category">
				전체
			</h2>
		</div>
		<div className="post-category-list index-type-common index-type-horizontal">
			<ul className="post-list-horizontal">
			{
				mainPosts.map((c, i) => {
					console.log(c.Category);
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
										<a href="/" className="post-link-category">
											<span className="post-category">
												{c.Category && c.Category.name}
											</span>
										</a>
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

const PostMain = ({ onMenu, changeMenu, onSearch, changeSearch, Component}) => {
	const openMenu = {
		left: `${onMenu ? 380 : 0}px`
	};

	const [allPost, setAP] = useState(true);

	return (
		<div id="post-container" style={openMenu}>
			<MainHeader onMenu={onMenu} changeMenu={changeMenu.bind(null, onMenu)} onSearch={onSearch} changeSearch={changeSearch.bind(null, onSearch)}/>
			<main id="post-main">
				<div className="post-inner-index">
					{Component}
				</div>
			</main>
			<footer id="post-footer">
				copy tistory
			</footer>
		</div>
	);
}

const Blog = () => {
	const {mainPosts} = useSelector(state=>state.posts)

	return (
		<PostList mainPosts={mainPosts}/>
	);
}

Blog.getInitialProps = async ( context ) =>{
	context.store.dispatch({
		type: LOAD_MAIN_POSTS_REQUEST,
	});
}

Blog.propTypes = {

};

export default Blog;
