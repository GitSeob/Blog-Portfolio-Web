import axios from 'axios';
import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { LOGIN_ADMIN_REQUEST, LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_FAILURE, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOAD_ADMIN_FAILURE, LOGOUT_ADMIN_SUCCESS, LOGOUT_ADMIN_FAILURE, LOGOUT_ADMIN_REQUEST } from '../reducers/admin';

function loginAPI(loginData){
	 return axios.post('/user/login', loginData)
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
			type: LOGIN_ADMIN_FAILURE,
			error: e.response.data,
		});
	}
}

function* watchLogin() {
	yield takeLatest(LOGIN_ADMIN_REQUEST, login);
}

function loadUserAPI(userId) {
	return axios.get(userId ? `/user/${userId}` : '/user/')
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
			error: e.response.data,
		})
	}
}

function* watchLoadUser() {
	yield takeLatest(LOAD_ADMIN_REQUEST, loadUser);
}

function logoutAPI() {
	return axios.post('/user/logout', {})
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
			error: e.response.data,
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
		fork(watchLogout),
	])
}
