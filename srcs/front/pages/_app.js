import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppLayout from '../containers/AppLayout';
import Helmet from 'react-helmet';

// modules for Redux connect
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import reducer from '../reducers';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../sagas'

import '../css/main.css';

const Home = ({ pathname, Component, store }) => {

	return (
		<Provider store={store}>
			<Helmet
				title='anjoy blog'
				htmlAttributes={{lang: 'ko'}}
				meta={[{
					charSet: 'UTF-8',
				},{
					name: 'viewport',
					content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=yes,viewport-fit=cover',
				}]}
			/>
			{pathname==="/portfolio" ?
				<><Component/></>
				:
				<AppLayout>
					<Component />
				</AppLayout>
			}
		</Provider>
	);
};

Home.propTypes = {
	Component: PropTypes.elementType.isRequired,
	store: PropTypes.object,
};

Home.getInitialProps = async (context) => {
	const { ctx, Component } = context;
	let pageProps = {}
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	// console.log(ctx);
	return { pageProps, pathname: ctx.pathname };
};

const configureStore = (initialState, options) => {
	// store 커스터마이징
	const sagaMiddleware = createSagaMiddleware();
	const middlewares = [sagaMiddleware];
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
	sagaMiddleware.run(rootSaga);
	return store
}

export default withRedux(configureStore)(Home);
