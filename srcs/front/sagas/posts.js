import axios from 'axios';
import { call, all, fork, takeLatest, put, throttle } from 'redux-saga/effects';

import {
	ADD_POST_REQUEST,
	ADD_POST_SUCCESS,
	ADD_POST_FAILURE,
	LOAD_MAIN_POSTS_SUCCESS,
	LOAD_MAIN_POSTS_REQUEST,
	LOAD_ONE_POST_SUCCESS,
	LOAD_ONE_POST_FAILURE,
	LOAD_ONE_POST_REQUEST,
	LOAD_CATEGORY_SUCCESS,
	LOAD_CATEGORY_FAILURE,
	LOAD_CATEGORY_REQUEST,
	REMOVE_POST_REQUEST,
	REMOVE_POST_SUCCESS,
	REMOVE_POST_FAILURE,
	LOAD_CATEGORY_POSTS_SUCCESS,
	LOAD_CATEGORY_POSTS_FAILURE,
	LOAD_CATEGORY_POSTS_REQUEST,
} from '../reducers/posts';

function addPostAPI(postData) {
	return axios.post('/post', postData, {
		withCredentials: true,
	})
}

function* addPost(action) {
	try {
		const result = yield call(addPostAPI, action.data);
		console.log(result.data);
		yield put({
			type: ADD_POST_SUCCESS,
			data: result.data,
		});
	} catch(e){
		console.error(e);
		yield put({
			type: ADD_POST_FAILURE,
			error: e,
		});
	}
}

function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost);
}

function loadAllPostsAPI() {
	return axios.get('/posts');
}

function* loadAllPosts(action) {
	try {
		const result = yield call(loadAllPostsAPI);
		yield put({
			type: LOAD_MAIN_POSTS_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: ADD_POST_FAILURE,
			error: e,
		})
	}
}

function* watchLoadAllPosts() {
	yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadAllPosts);
}

function loadOnePostAPI(id) {
	return axios.get(`/post/${id}`);
}

function* loadOnePost(action) {
	try {
		const result = yield call(loadOnePostAPI, action.data);
		yield put({
			type: LOAD_ONE_POST_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		yield put({
			type: LOAD_ONE_POST_FAILURE,
			error: e,
		})
	}
}

function* watchLoadOnePost() {
	yield takeLatest(LOAD_ONE_POST_REQUEST, loadOnePost);
}

function loadCategoryAPI() {
	return axios.get('http://localhost:3065/api/posts/category');
}

function* loadCategory(action) {
	try {
		const result = yield call(loadCategoryAPI);
		yield put({
			type: LOAD_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: LOAD_CATEGORY_FAILURE,
			error: e,
		})
	}
}

function* watchLoadCategory(){
	yield takeLatest(LOAD_CATEGORY_REQUEST, loadCategory);
}

function removePostAPI(postId) {
	return axios.delete(`/post/${postId}`, {
		withCredentials: true
	});
}

function* removePost(action) {
	try {
		const result = yield call(removePostAPI, action.data);
		yield put({
			type: REMOVE_POST_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: REMOVE_POST_FAILURE,
			error: e,
		})
	}
}

function* watchRemovePost() {
	yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function loadCategoryPostsAPI(categoryName) {
	return axios.get(`/posts/category/${encodeURIComponent(categoryName)}`)
}

function* loadCategoryPosts(action) {
	try {
		const result = yield call(loadCategoryPostsAPI, action.data)
		yield put({
			type: LOAD_CATEGORY_POSTS_SUCCESS,
			data: result.data
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: LOAD_CATEGORY_POSTS_FAILURE,
			error: e
		})
	}
}

function* watchLoadCategoryPosts() {
	yield throttle(2000, LOAD_CATEGORY_POSTS_REQUEST, loadCategoryPosts);
}

export default function* postSaga(){
	yield all([
		fork(watchAddPost),
		fork(watchLoadAllPosts),
		fork(watchLoadOnePost),
		fork(watchLoadCategory),
		fork(watchRemovePost),
		fork(watchLoadCategoryPosts),
	])
}
