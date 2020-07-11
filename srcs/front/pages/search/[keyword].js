import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import axios from 'axios';
import { END } from 'redux-saga';

import wrapper from '../../store/configureStore';
import {useSelector, useDispatch} from 'react-redux';
import {SEARCH_POSTS_REQUEST} from '../../reducers/posts';
import {PostList} from '../index';
import Head from 'next/head';


const Search = ( ) => {
	const router = useRouter();
	const { keyword } = router.query;
	const {mainPosts, boardTitle} = useSelector(state=>state.posts)
	const title = "[ " + boardTitle + " ] 키워드의 검색 결과";

	return (
		<>
			<Head>
				<title>" {keyword} " 검색 결과</title>
			</Head>
			<PostList mainPosts={mainPosts} boardTitle={title}/>
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}

	const keyword = context.params.keyword;
	context.store.dispatch({
		type: SEARCH_POSTS_REQUEST,
		data: keyword,
	})

	context.state.dispatch(END);
	await context.store.sagaTask.toPromise();
})


//Search.getInitialProps = async (context) => {
//	const keyword = context.query.keyword;

//	context.store.dispatch({
//		type: SEARCH_POSTS_REQUEST,
//		data: keyword,
//	})
//  };

export default Search;
