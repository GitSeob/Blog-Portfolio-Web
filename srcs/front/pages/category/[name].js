import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { END } from 'redux-saga';
import Head from 'next/head';

import wrapper from '../../store/configureStore';
import { useRouter } from 'next/router';
import {useSelector} from 'react-redux';
import {LOAD_CATEGORY_POSTS_REQUEST} from '../../reducers/posts';
import {PostList} from '../index';

const Category = ( ) => {
	const router = useRouter();
	const { name } = router.query;
	const {mainPosts, boardTitle, hasMorePosts, isLoadingPosts} = useSelector(state=>state.posts)

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
				if (hasMorePosts && !isLoadingPosts) {
					const lastId = mainPosts[mainPosts.length - 1]?.id;
					dispatch({
						type: LOAD_CATEGORY_POSTS_REQUEST,
						data: name,
						lastId,
					})
				}
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	}, [hasMorePosts, isLoadingPosts, mainPosts]);

	return (
		<>
		<Head>
			<title>{name} 카테고리</title>
		</Head>
		<PostList mainPosts={mainPosts} boardTitle={boardTitle}/>
		</>
	);
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
	const name = context.params.name
	const cookie = context.req ? context.req.headers.cookie : '';
	axios.defaults.headers.Cookie = '';
	if (context.req && cookie) {
		axios.defaults.headers.Cookie = cookie;
	}

	context.store.dispatch({
		type: LOAD_CATEGORY_POSTS_REQUEST,
		data: name,
	})
	context.store.dispatch(END);
	await context.store.sagaTask.toPromise();
})

export default Category;
