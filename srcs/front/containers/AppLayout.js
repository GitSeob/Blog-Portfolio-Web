import React ,{useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Close, Menu, Search, Edit, Settings} from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import useInput from '../hooks/useInput';
import { OPEN_POSTING } from '../reducers/posts';
import {Person, ExitToApp} from '@material-ui/icons';
import { LOGOUT_ADMIN_REQUEST } from '../reducers/admin';
import LoginForm from '../components/LoginForm';
import Posting from '../containers/Posting';
import Router from 'next/router';

export const MenuBar = ({onMenu, clickedLoginBtn, setClickedLogin}) => {
	const { admin } = useSelector(state=>state.admin);
	const { category_list } = useSelector(state=>state.posts)
	const dispatch = useDispatch();

	const getCategoryPosts = useCallback(name => () => {
		if (name === ''){
			return ;
		}
		Router.push({ pathname: '/category', query: { name: name } }, `/category/${name}`);
	}, []);

	const openMenu = {
		left: `${onMenu ? 0 : -380}px`
	};

	const logoutCliked = useCallback(() => {
		dispatch({
			type: LOGOUT_ADMIN_REQUEST,
		})
	});

	const loginClicked = useCallback(() => {
		setClickedLogin(true);
	}, [clickedLoginBtn]);

	return (
		<div className="area-menu " style={openMenu}>
			<nav className="menu-navigation">
				<ul className="list-gnb">
					<li className="t_menu">
						<Link
							href="/">
							<a className="link-gnb link-lnb">
								홈
							</a>
						</Link>
					</li>
				</ul>
				<ul className="tt-category">
					<li>
						<ul className="post-category-list list-gnb" >
							{
								category_list.map((c, i) => {
									return (
										<li key={(i)} className="">
											<button onClick={getCategoryPosts(c.name)} >
												<a className="link-item link-gnb link-lnb">
													{c.name}
												</a>
											</button>
										</li>
									);
								})
							}
						</ul>
					</li>
				</ul>
				<ul className="header-login-btn-wrap">
					{ admin && <li>
						<Link href="/manage">
							<a className="header-login-btn">
								<Settings /> 블로그 관리
							</a>
						</Link>
					</li>}
					<li>
						{!admin ?
							<button className="header-login-btn" onClick={loginClicked}>
								<Person /> 로그인
							</button>
							:
							<button className="header-login-btn" onClick={logoutCliked}>
								<ExitToApp /> 로그아웃
							</button>
						}
					</li>
				</ul>
			</nav>
		</div>
	);
}

export const MainHeader = ({ onMenu, changeMenu, onSearch, changeSearch}) => {
	const [keyword, OCKeyword] = useInput('');

	const showSearchWindow = {
		display: `${onSearch ? 'block' : 'none'}`
	}

	const getSearchPost = useCallback((e) => {
		e.preventDefault();
		if (keyword) {
			Router.push({ pathname: '/search', query: { keyword: keyword } }, `/search/${keyword}`);
		} else {
			alert("검색어를 입력하세요.");
		}
	}, [keyword]);

	return (
		<header id="post-header">
			<div className="inner-header">
				<h1 className="post-logo">
					<Link href="/">
						<a className="post-link-logo" title="title">
							<span className="blind">
								title
							</span>
							<span className="post-title-text">
								title
							</span>
						</a>
					</Link>
				</h1>
				<button type="button" className="post-btn-menu" onClick={changeMenu}>
					<span className="post-icon-menu">
						{onMenu ? <Close /> : <Menu />}
					</span>
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
					<form onSubmit={getSearchPost}>
						<input
							value={keyword}
							name="keyword"
							onChange={OCKeyword}
							type="text"
							placeholder="Search"
							className="post-inp-search"
						></input>
					</form>
				</div>
			</div>
		</header>
	);
}

const PostMain = ({ onMenu, changeMenu, onSearch, changeSearch, Component}) => {
	const openMenu = {
		left: `${onMenu ? 380 : 0}px`
	};

	return (
		<div id="post-container" style={openMenu}>
			<MainHeader onMenu={onMenu} changeMenu={changeMenu.bind(null, onMenu)} onSearch={onSearch} changeSearch={changeSearch.bind(null, onSearch)}/>
			<main id="post-main">
				{Component}
			</main>
			<footer id="post-footer">
				copy tistory
			</footer>
		</div>
	);
}

const AppLayout = ({ pathname, children }) => {
	const { admin, isLoggedIn } = useSelector(state=>state.admin);
	const { postingWindowOpen, category_list } = useSelector(state=>state.posts);
	const dispatch = useDispatch();

	const [clickedLoginBtn, setClickedLogin] = useState(false);
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

	const Blogwrap = () => {
		return (
			<>
				<div className="post-inner-index">
					{children}
				</div>
			</>
		);
	}

	useEffect(() => {
		if (isLoggedIn) {
			setClickedLogin(false);
		}
	}, [isLoggedIn]);

	return (
		<div id="post-wrap">
			<MenuBar onMenu={onMenu} clickedLoginBtn={clickedLoginBtn} setClickedLogin={setClickedLogin}/>
			<PostMain onMenu={onMenu} changeMenu={changeMenu.bind(null, onMenu)} onSearch={onSearch} changeSearch={changeSearch.bind(null, onSearch)} Component={<Blogwrap/>}/>
			{
				admin &&
					<button className="posting-btn" onClick={() => { dispatch({ type: OPEN_POSTING }) }}>
						<Edit />
					</button>
			}
			{ postingWindowOpen && <Posting category_list={category_list}/> }
			{ clickedLoginBtn && <LoginForm setClickedLogin={setClickedLogin}/> }
		</div>
	);
};

export default AppLayout;
