import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import axios from 'axios';
import AOS from 'aos';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import '../css/main.css';
import 'aos/dist/aos.css';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import wrapper from '../store/configureStore';

import { LOAD_ADMIN_REQUEST } from '../reducers/admin';
import { LOAD_INFORMATION_REQUEST } from '../reducers/information';
import { LOAD_CATEGORY_REQUEST } from '../reducers/posts';
import AppLayout from '../containers/AppLayout';
import ManageMenu from '../containers/ManageMenu';

const Home = ({ pathname, Component, windowSize }) => {
	const { blogTitle, description, faviconURL } = useSelector(state=>state.information);

	useEffect(() => {
		AOS.init({
			duration: 1500
		});
		AOS.refresh();
	});

	const WrapComponent = ( ) => {
		const LayOut = useCallback(() => {
			if (pathname === '/portfolio' || pathname === '/login')
			{
				return (
					<>
					<Background>
						<Component />
					</Background>
					</>
				);
			}
			else if ( pathname === '/manage')
			{
				return (
					<>
					<Head>
						<title>관리자 페이지</title>
					</Head>
					<Background>
						<ManageMenu>
							<Component />
						</ManageMenu>
					</Background>
					</>
				)
			}
			else
			{
				return (
					<>
					<AppLayout pathname={pathname} windowSize={windowSize}>
						<Component />
					</AppLayout>
					</>
				);
			}
		}, []);

		return (
			<LayOut />
		);
	}

	return (
		<>
		<Head>
			<title>{blogTitle}</title>
			<meta charSet='utf-8' />
			<meta name="description" content={description} />
			<meta name="og:description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="shortcut icon" href={faviconURL} />
			<link rel="subresource" href="https://fonts.googleapis.com/css?family=Open+Sans|Quicksand:300,400,500" as="style" crossOrigin="anonymous" />
			<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
		</Head>
		{/*//<Provider store={store}>*/}
			<WrapComponent />
		{/*//</Provider>*/}
		</>
	);
};

Home.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

const Background = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	margin: 0;
`;

Home.getInitialProps = async (context) => {
	const { ctx, Component } = context;
	let pageProps = {}
	const state = ctx.store.getState();
	const cookie = ctx.isServer ? ctx.req.headers.cookie : '' ; // cookie

	if(!state.admin.admin) {
		ctx.store.dispatch({
			type: LOAD_ADMIN_REQUEST,
		})
	}
	ctx.store.dispatch({
		type: LOAD_INFORMATION_REQUEST,
	})
	ctx.store.dispatch({
		type: LOAD_CATEGORY_REQUEST,
	})

	if (ctx.isServer && cookie) { // 클라이언트일 경우에는 브라우저가 있으므로 서버사이드 렌더링일 경우에만 실행
		axios.defaults.headers.Cookie = cookie; // 프론트 서버에서 백 서버로 보낼 때 쿠키를 동봉해준다는 코드
	}
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	return { pageProps, pathname: ctx.pathname };
};

export default wrapper.withRedux(Home);
