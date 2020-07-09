import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Head from 'next/head';

import DefaultManage from '../components/formanage/DefaultManage';
import BlogManage from '../components/formanage/BlogManage';
import PortManage from '../components/formanage/PortManage';
import { LOAD_CATEGORY_REQUEST, LOAD_MAIN_POSTS_REQUEST } from '../reducers/posts';
import { LOAD_PORT_DATA_REQUEST } from '../reducers/portfolio';

const Manage = () => {
	const { menuStatus } = useSelector(state=>state.manage);
	const { category_list, mainPosts } = useSelector(state=>state.posts);
	const { admin } = useSelector(state=>state.admin);

	let ComponentTitle = '';
	if (menuStatus.blog) {
		ComponentTitle = "블로그";
	}
	else if (menuStatus.port) {
		ComponentTitle = "포트폴리오";
	}

	const ManageComponent = () => {
		if (menuStatus.blog) {
			return (
				<>
				<BlogManage category_list={category_list} mainPosts={mainPosts}/>
				</>
			);
		}
		else if (menuStatus.port) {
			return (
				<PortManage />
			);
		}
		else {
			return (
				<div> quit </div>
			);
		}
	}

	return (
		<div>
			<h1 className="manage-title">
				{ComponentTitle}
			</h1>
			<ManageComponent />
		</div>
	);

}

Manage.getInitialProps = async(context) => {
	context.store.dispatch({
		type: LOAD_CATEGORY_REQUEST,
	});
	context.store.dispatch({
		type: LOAD_MAIN_POSTS_REQUEST,
	});
	context.store.dispatch({
		type: LOAD_PORT_DATA_REQUEST
	})
}

Manage.propTypes = {

};

export default Manage;
