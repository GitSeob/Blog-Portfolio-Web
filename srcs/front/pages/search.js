import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {useSelector, useDispatch} from 'react-redux';
import {SEARCH_POSTS_REQUEST} from '../reducers/posts';
import {PostList} from './index';

const Search = ( ) => {
	const {mainPosts, boardTitle} = useSelector(state=>state.posts)
	const title = "[ " + boardTitle + " ] 키워드의 검색 결과";

	return (
		<PostList mainPosts={mainPosts} boardTitle={title}/>
	);
};

Search.getInitialProps = async (context) => {
	const keyword = context.query.keyword;

	context.store.dispatch({
		type: SEARCH_POSTS_REQUEST,
		data: keyword,
	})
  };

export default Search;
