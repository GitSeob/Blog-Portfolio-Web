import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../containers/AppLayout';
// import Helmet from 'react-helmet';
// import {Helmet} from 'react-helmet-async';
import axios from 'axios';
import Head from 'next/head';

// modules for Redux connect
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas'

import styled from 'styled-components';

import withReduxSaga from 'next-redux-saga' // SSR 렌더링을 위한 사가 설정

import '../css/main.css';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { LOAD_MAIN_POSTS_REQUEST, LOAD_CATEGORY_REQUEST } from '../reducers/posts';
import { LOAD_ADMIN_REQUEST } from '../reducers/admin';

const Home = ({ pathname, Component, store }) => {

	return (
		<Provider store={store}>
			<Head>
				<title>anjoy의 블로그와 포트폴리오</title>
			</Head>
			{pathname==="/portfolio" || pathname === "/login" ?
				<Background>
					<Component/>
				</Background>
				:
				<AppLayout pathname={pathname}>
					<Component />
				</AppLayout>
			}
		</Provider>
	);
};

const Background = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	margin: 0;
`;

Home.propTypes = {
	Component: PropTypes.elementType.isRequired,
	store: PropTypes.object,
};

Home.getInitialProps = async (context) => {
	const { ctx, Component } = context;
	let pageProps = {}
	const state = ctx.store.getState();
	const cookie = ctx.isServer ? ctx.req.headers.cookie : '' ; // cookie

	if(!state.admin.admin) {
		ctx.store.dispatch({
			type: LOAD_ADMIN_REQUEST,
		})
		ctx.store.dispatch({
			type: LOAD_CATEGORY_REQUEST,
		})
	}
	if (ctx.isServer && cookie) { // 클라이언트일 경우에는 브라우저가 있으므로 서버사이드 렌더링일 경우에만 실행
		axios.defaults.headers.Cookie = cookie; // 프론트 서버에서 백 서버로 보낼 때 쿠키를 동봉해준다는 코드
	}
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	return { pageProps, pathname: ctx.pathname };
};

const configureStore = (initialState, options) => {
	// store 커스터마이징
	const sagaMiddleware = createSagaMiddleware();
	// const middlewares = [sagaMiddleware];
	const middlewares = [sagaMiddleware, (store) => (next) => (action) => {
		console.log(action);
		next(action);
	}];
	// redux는 단순하게 action과 reducer에 따라 state를 바꿔주는 것이기에
	// 그 외의 기능을 이용하려면 middleware를 사용해야 한다.

	const enhancer = process.env.NODE_ENV === 'production'
		? compose(applyMiddleware(...middlewares), )
		: compose(
			applyMiddleware(...middlewares),
			typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !=='undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__(): (f)=>f,
			// 위의 REDUX_DEVTOOLS부분은 실제 배포시 빼주어야 한다.
	)
	// compose는 미들웨어들을 합성하는 함수
	const store = createStore(reducer, initialState, enhancer);
	store.sagaTask = sagaMiddleware.run(rootSaga); // withReduxSaga 를 위함
	return store
}

export default withRedux(configureStore)(withReduxSaga(Home));
