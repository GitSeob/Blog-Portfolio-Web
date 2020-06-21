import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import DefaultManage from '../components/formanage/DefaultManage';
import BlogManage from '../components/formanage/BlogManage';
import PortManage from '../components/formanage/PortManage';

const Manage = () => {
	const { menuStatus } = useSelector(state=>state.manage);

	let ComponentTitle = '';

	if (menuStatus.main) {
		ComponentTitle = "기본 정보";
	}
	else if (menuStatus.blog) {
		ComponentTitle = "블로그";
	}
	else if (menuStatus.port) {
		ComponentTitle = "포트폴리오";
	}

	const ManageComponent = () => {
		if (menuStatus.main) {
			return (
				<DefaultManage />
			);
		}
		else if (menuStatus.blog) {
			return (
				<BlogManage />
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

Manage.propTypes = {

};

export default Manage;
