import { all, fork, takeLatest, put } from 'redux-saga/effects';
import { LOGIN_ADMIN_REQUEST, LOGIN_ADMIN_SUCCESS, LOGIN_ADMIN_FAILURE } from '../reducers/admin';

function loginAPI(){
	console.log('login api');
	return (1);
};

function* login(action){
	try {
		const result = yield(loginAPI, action.data);
		yield put({
			type: LOGIN_ADMIN_SUCCESS
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
