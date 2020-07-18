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
	EDIT_POST_MANAGE_REQUEST,
	EDIT_POST_MANAGE_FAILURE,
	OPEN_POSTING,
	EDIT_POST_MANAGE_SUCCESS,
	ON_EDIT,
	REMOVE_SELECTED_POST_REQUEST,
	REMOVE_SELECTED_POST_SUCCESS,
	REMOVE_SELECTED_POST_FAILURE,
	CHANGE_SELECTED_POSTS_CATEGORY_REQUEST,
	CHANGE_SELECTED_POSTS_CATEGORY_SUCCESS,
	CHANGE_SELECTED_POSTS_CATEGORY_FAILURE,
} from '../reducers/posts';

function addPostAPI(postData) {
	return axios.post('/post', postData)
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
			error: e.response.data,
		});
	}
}

function* watchAddPost() {
	yield takeLatest(ADD_POST_REQUEST, addPost);
}

function loadAllPostsAPI(lastId) {
	return axios.get(`/posts?lastId=${lastId || 0}`);
}

function* loadAllPosts(action) {
	try {
		const result = yield call(loadAllPostsAPI, action.lastId);
		yield put({
			type: LOAD_MAIN_POSTS_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: LOAD_MAIN_POSTS_FAILURE,
			error: e.response.data,
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
			error: e.response.data,
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
			error: e.response.data,
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
			error: e.response.data,
		})
	}
}

function* watchRemovePost() {
	yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function loadCategoryPostsAPI(categoryName, lastId) {
	return axios.get(`/category/${encodeURIComponent(categoryName)}?lastId=${lastId || 0}`);
}

function* loadCategoryPosts(action) {
	try {
		const result = yield call(loadCategoryPostsAPI, action.data, action.lastId)
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
	return axios.patch(`/post/${postData.id}`, postData)
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
			error: e.response.data,
		})
	}
}

function* watchEditPost() {
	yield takeLatest(EDIT_POST_REQUEST, editPost);
}

function loadSearchPostAPI(keyword, lastId) {
	return axios.get(`/posts/search/${encodeURIComponent(keyword)}?lastId=${lastId || 0}`);
} // SSR 환경에서 특수문자, 한글을 URL으로 전송할 때 디코딩이 필수 !

function* loadSearchPost(action) {
	try {
		const result = yield call(loadSearchPostAPI, action.data, action.lastId);
		yield put({
			type: SEARCH_POSTS_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: SEARCH_POSTS_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchLoadSearch() {
	yield takeLatest(SEARCH_POSTS_REQUEST, loadSearchPost);
}

function addCategoryAPI(name) {
	return axios.post('/category', {
		name: name
	})
}

function* addCategory(action) {
	try {
		const result = yield call(addCategoryAPI, action.data);
		yield put({
			type: ADD_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: ADD_CATEGORY_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchAddCategory() {
	yield takeLatest(ADD_CATEGORY_REQUEST, addCategory);
}

function editCategoryAPI(data) {
	return axios.patch(`/category/${data.index}`, {
		name: data.name,
	})
}

function* editCategory(action) {
	try{
		const result = yield call(editCategoryAPI, action.data);
		yield put({
			type: EDIT_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: EDIT_CATEGORY_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchEditCategory() {
	yield takeLatest(EDIT_CATEGORY_REQUEST, editCategory);
}

function removeCategoryAPI(categoryId) {
	return axios.delete(`/category/${categoryId}`)
}

function* removeCategory(action) {
	try {
		const result = yield call(removeCategoryAPI, action.data);
		yield put({
			type: REMOVE_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: REMOVE_CATEGORY_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchRemoveCategory() {
	yield takeLatest(REMOVE_CATEGORY_REQUEST, removeCategory);
}

function editPostManageAPI(postId) {
	return axios.get(`/post/${postId}`);
}

function* editPostManage(action) {
	try {
		const result = yield call(editPostManageAPI, action.data);
		yield put({
			type: EDIT_POST_MANAGE_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: EDIT_POST_MANAGE_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchEditPostManage() {
	yield takeLatest(EDIT_POST_MANAGE_REQUEST, editPostManage);
}

function removeSelectedPostsAPI(postIds) {
	return axios.post('/posts/remove', postIds)
}

function* removeSelectedPosts(action) {
	try {
		const result = yield call(removeSelectedPostsAPI, action.data);
		yield put({
			type: REMOVE_SELECTED_POST_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: REMOVE_SELECTED_POST_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchRemoveSelectedPosts() {
	yield takeLatest(REMOVE_SELECTED_POST_REQUEST, removeSelectedPosts);
}

function changeSelectedCategoryAPI(data) {
	return axios.post('/posts/changeCategory', data)
}

function* changeSelectedCategory(action){
	try {
		const result = yield call(changeSelectedCategoryAPI, action.data);
		yield put({
			type: CHANGE_SELECTED_POSTS_CATEGORY_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: CHANGE_SELECTED_POSTS_CATEGORY_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchChangeSelectedCategory() {
	yield takeLatest(CHANGE_SELECTED_POSTS_CATEGORY_REQUEST, changeSelectedCategory);
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
		fork(watchEditPostManage),
		fork(watchRemoveSelectedPosts),
		fork(watchChangeSelectedCategory),
	])
}
