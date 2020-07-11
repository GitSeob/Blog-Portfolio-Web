import axios from 'axios';
import { call, all, fork, takeLatest, put, throttle } from 'redux-saga/effects';
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
	yield throttle(1000, LOGIN_ADMIN_REQUEST, login) // takeLastest 해도 request가는 건 막을 수 없다. 따라서, throttle을 쓴다.
    // throttle은 써준 시간동안 같은 리퀘스트를 받을 수 없게 해준다. ex) 1초동안 Action 1번만 ,,
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
		// console.error(e);
		yield put({
			type: LOAD_ADMIN_FAILURE,
			error: e,
		})
	}
}

function* watchLoadUser() {
	yield throttle(1000, LOAD_ADMIN_REQUEST, loadUser);
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
		fork(watchLogout),
	])
}
