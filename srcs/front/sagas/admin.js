import axios from 'axios';
import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { LOGIN_ADMIN_REQUEST, LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_FAILURE, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOAD_ADMIN_FAILURE, LOGOUT_ADMIN_SUCCESS, LOGOUT_ADMIN_FAILURE, LOGOUT_ADMIN_REQUEST } from '../reducers/admin';

function loginAPI(loginData){
	 return axios.post('/user/login', loginData, {
		 withCredentials: true, // 도메인간 쿠키 주고 받는 옵션
	 })
};

function* login(action){
	try {
		const result = yield call(loginAPI, action.data);
		yield put({
			type: LOGIN_ADMIN_SUCCESS,
			data: result.data,
		});
	} catch(e) {
		console.error(e);
		yield put({
			type: LOGIN_ADMIN_FAILURE
		});
	}
}

function* watchLogin() {
	yield takeLatest(LOGIN_ADMIN_REQUEST, login);
}

function loadUserAPI(userId) {
	return axios.get(userId ? `/user/${userId}` : '/user/', {
		withCredentials: true,
	})
}

function* loadUser(action) {
	try {
		const result = yield call(loadUserAPI, action.data);
		yield put({
			type: LOAD_ADMIN_SUCCESS,
			data: result.data,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: LOAD_ADMIN_FAILURE,
			error: e,
		})
	}
}

function* watchLoadUser() {
	yield takeLatest(LOAD_ADMIN_REQUEST, loadUser);
}

function logoutAPI() {
	return axios.post('/user/logout', {}, {
		withCredentials: true,
	})
}

function* logout(action) {
	try {
		yield call(logoutAPI);
		yield put({
			type: LOGOUT_ADMIN_SUCCESS,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: LOGOUT_ADMIN_FAILURE,
		})
	}
}

function* watchLogout() {
	yield takeLatest(LOGOUT_ADMIN_REQUEST, logout);
}

export default function* adminSaga(){
	yield all([
		fork(watchLogin),
		fork(watchLoadUser),
		fork(watchLogin),
	])
}
