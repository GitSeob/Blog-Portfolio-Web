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
	EDIT_POST_SUCCESS,
	EDIT_POST_FAILURE,
	EDIT_POST_REQUEST,
	SEARCH_POSTS_SUCCESS,
	SEARCH_POSTS_FAILURE,
	SEARCH_POSTS_REQUEST,
	LOAD_MAIN_POSTS_FAILURE,
	ADD_CATEGORY_REQUEST,
	ADD_CATEGORY_SUCCESS,
	ADD_CATEGORY_FAILURE,
	EDIT_CATEGORY_SUCCESS,
	EDIT_CATEGORY_FAILURE,
	EDIT_CATEGORY_REQUEST,
	REMOVE_CATEGORY_SUCCESS,
	REMOVE_CATEGORY_REQUEST,
	REMOVE_CATEGORY_FAILURE,
} from '../reducers/posts';

function addPostAPI(postData) {
	return axios.post('/post', postData, {
		withCredentials: true,
	})
}

function* addPost(action) {
	try {
		const result = yield call(addPostAPI, action.data);
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
			type: LOAD_MAIN_POSTS_FAILURE,
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
	return axios.get('/category');
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
	return axios.get(`/category/${encodeURIComponent(categoryName)}`)
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

function editPostAPI(postData) {
	return axios.patch(`/post/${postData.id}`, postData, {
		withCredentials: true,
	})
}

function* editPost(action) {
	try {
		const result = yield call(editPostAPI, action.data);
		yield put({
			type: EDIT_POST_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: EDIT_POST_FAILURE,
			error: e,
		})
	}
}

function* watchEditPost() {
	yield takeLatest(EDIT_POST_REQUEST, editPost);
}

function loadSearchPostAPI(keyword) {
	return axios.get(`/posts/search/${encodeURIComponent(keyword)}`);
} // SSR 환경에서 특수문자, 한글을 URL으로 전송할 때 디코딩이 필수 !

function* loadSearchPost(action) {
	try {
		const result = yield call(loadSearchPostAPI, action.data);
		yield put({
			type: SEARCH_POSTS_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: SEARCH_POSTS_FAILURE,
			error: e,
		})
	}
}

function* watchLoadSearch() {
	yield takeLatest(SEARCH_POSTS_REQUEST, loadSearchPost);
}

function addCategoryAPI(name) {
	return axios.post('/category', {
		name: name
	}, {
		withCredentials: true,
	})
}

function* addCategory(action) {
	try {
		const result = yield addCategoryAPI(action.data);
		yield put({
			type: ADD_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: ADD_CATEGORY_FAILURE,
			error: e,
		})
	}
}

function* watchAddCategory() {
	yield takeLatest(ADD_CATEGORY_REQUEST, addCategory);
}

function editCategoryAPI(data) {
	return axios.patch(`/category/${data.index}`, data.name, {
		withCredentials: true,
	})
}

function* editCategory(action) {
	try{
		const result = yield editCategoryAPI(action.data);
		yield put({
			type: EDIT_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: EDIT_CATEGORY_FAILURE,
			error: e,
		})
	}
}

function* watchEditCategory() {
	yield takeLatest(EDIT_CATEGORY_REQUEST, editCategory);
}

function removeCategoryAPI(categoryId) {
	return axios.delete(`/category/${categoryId}`, {
		withCredentials: true,
	})
}

function* removeCategory(action) {
	try {
		const result = yield removeCategoryAPI(action.data);
		yield put({
			type: REMOVE_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: REMOVE_CATEGORY_FAILURE,
			error: e,
		})
	}
}

function* watchRemoveCategory() {
	yield takeLatest(REMOVE_CATEGORY_REQUEST, removeCategory);
}

export default function* postSaga(){
	yield all([
		fork(watchAddPost),
		fork(watchLoadAllPosts),
		fork(watchLoadOnePost),
		fork(watchLoadCategory),
		fork(watchRemovePost),
		fork(watchLoadCategoryPosts),
		fork(watchEditPost),
		fork(watchLoadSearch),
		fork(watchAddCategory),
		fork(watchEditCategory),
		fork(watchRemoveCategory),
	])
}
