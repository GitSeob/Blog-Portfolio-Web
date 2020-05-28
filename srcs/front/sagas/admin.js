import axios from 'axios';
import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { LOGIN_ADMIN_REQUEST, LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_FAILURE } from '../reducers/admin';

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

export default function* adminSaga(){
	yield all([
		fork(watchLogin),
	])
}
