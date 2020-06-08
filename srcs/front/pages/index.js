import React ,{useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {Close, Menu, Search, Edit} from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/posts';

export const MenuBar = ({onMenu}) => {
	const openMenu = {
		left: `${onMenu ? 0 : -380}px`
	};

	const dummy_list = ['test1', 'test2', 'test3', 'test4']

	return (
		<div className="area-menu " style={openMenu}>
			<nav className="menu-navigation">
				<ul className="list-gnb">
					<li className="t_menu">
						<a href="/" className="link-gnb link-lnb">
							홈
						</a>
					</li>
				</ul>
				<ul className="tt-category">
					<li>
						<ul className="post-category-list list-gnb" >
							{
								dummy_list.map((c, i) => {
									return (
										<li key={(i)} className="">
											<a href="/" className="link-item link-gnb link-lnb">
												{c}
											</a>
										</li>
									);
								})
							}
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export const MainHeader = ({ onMenu, changeMenu, onSearch, changeSearch}) => {
	const showSearchWindow = {
		display: `${onSearch ? 'block' : 'none'}`
	}

	return (
		<header id="post-header">
			<div className="inner-header">
				<h1 className="post-logo">
					<a href="/" title="title" className="post-link-logo">
						<span className="blind">
							title
						</span>
						<span className="post-title-text">
							title
						</span>
					</a>
				</h1>
				<button type="button" className="post-btn-menu" onClick={changeMenu}>
					<span className="post-icon-menu">
						{onMenu ? <Close /> : <Menu />}
					</span>
					{/* <span className="post-icon-close">
						<Close />
					</span> */}
					<span className="blind">

					</span>
				</button>
				<button className="post-btn-search" onClick={changeSearch}>
					<span className="post-icon-search">
						<Search />
					</span>
					<span className="blind">

					</span>
				</button>
				<div className="post-area-search thema-apply" style={showSearchWindow}>
					<form >
						<input type="text" name="search" title="Search" placeholder="Search" className="post-inp-search"/>
					</form>
				</div>
			</div>
		</header>
	);
}

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
											backgroundImage: `url(\'${c.thumbnail_path}\')`,
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
												{c.category}
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
		<a href="/posting" className="posting-btn">
			<Edit />
		</a>
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

export const BlogBackground = ({ Component }) => {

	const [onMenu, setMenu] = useState(false);
	const [onSearch, setSearch] = useState(false);

	const changeMenu = (onMenu) => {
		if(onMenu) {
			setMenu(false);
		} else {
			setMenu(true);
		}
	};
	const changeSearch = (onSearch) => {
		if(onSearch) {
			setSearch(false);
		} else {
			setSearch(true);
		}
	};
	return (
		<div id="post-wrap">
			<MenuBar onMenu={onMenu}/>
			<PostMain onMenu={onMenu} changeMenu={changeMenu.bind(null, onMenu)} onSearch={onSearch} changeSearch={changeSearch.bind(null, onSearch)} Component={Component}/>
		</div>
	);
};

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
