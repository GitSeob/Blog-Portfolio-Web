import React from 'react';
import PropTypes from 'prop-types';

import {useSelector} from 'react-redux';
import {LOAD_CATEGORY_POSTS_REQUEST} from '../reducers/posts';
import {PostList} from './index';

const Category = ({ name }) => {
	const {mainPosts, boardTitle} = useSelector(state=>state.posts)

	return (
		<PostList mainPosts={mainPosts} boardTitle={boardTitle}/>
	);
};

Category.getInitialProps = async (context) => {
	const name = context.query.name

	context.store.dispatch({
		type: LOAD_CATEGORY_POSTS_REQUEST,
		data: name,
	})
	return { name };
  };

export default Category;
