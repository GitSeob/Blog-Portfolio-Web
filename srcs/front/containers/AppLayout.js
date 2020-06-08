import React ,{useState, useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Close, Menu, Search, Edit} from '@material-ui/icons'

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

const AppLayout = ({ children }) => {

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
			<PostMain onMenu={onMenu} changeMenu={changeMenu.bind(null, onMenu)} onSearch={onSearch} changeSearch={changeSearch.bind(null, onSearch)} Component={children}/>
		</div>
	);
};

export default AppLayout;
