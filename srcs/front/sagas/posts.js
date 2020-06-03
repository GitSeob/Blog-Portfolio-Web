import axios from 'axios';
import { call, all, fork, takeLatest, put } from 'redux-saga/effects';

import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/posts';

function addPostAPI(postData) {
	return {
		data: postData,
	}
}

function* addPost(action) {
	try {
		console.log('accPost');
		const result = yield call(addPostAPI, action.data);
		yield put({
			type: ADD_POST_SUCCESS,
			data: result.data,
		});
	} catch(e){
		console.error(e);
		yield put({
			type: ADD_POST_FAILURE,
		});
	}
}

function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost);
}

export default function* postSaga(){
	yield all([
		fork(watchAddPost),
	])
}
