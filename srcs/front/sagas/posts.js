import axios from 'axios';
import { call, all, fork, takeLatest, put } from 'redux-saga/effects';

import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_REQUEST } from '../reducers/posts';

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

export default function* postSaga(){
	yield all([
		fork(watchAddPost),
		fork(watchLoadAllPosts),
	])
}
