import axios from 'axios';
import { call, all, fork, takeLatest, put } from 'redux-saga/effects';
import { UPLOAD_FAV_REQUEST,
	UPLOAD_FAV_SUCCESS,
	UPLOAD_FAV_FAILURE,
	EDIT_INFORMATION_REQUEST,
	EDIT_INFORMATION_SUCCESS,
	EDIT_INFORMATION_FAILURE,
	LOAD_INFORMATION_REQUEST,
	LOAD_INFORMATION_SUCCESS,
	LOAD_INFORMATION_FAILURE,
} from '../reducers/information';

function changeFavAPI(dataForm) {
	return axios.post('/information/image', dataForm)
}

function* changeFav(action) {
	try {
		const result = yield call(changeFavAPI, action.data);
		console.log(result);
		yield put({
			type: UPLOAD_FAV_SUCCESS,
			data: result.data.url,
		})
	} catch(e) {
		console.error(e);
		yield put({
			type: UPLOAD_FAV_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchChangeFav() {
	yield takeLatest(UPLOAD_FAV_REQUEST, changeFav);
}

function editInformationAPI(infoData) {
	return axios.post('/information', infoData)
}

function* editInformation(action) {
	try {
		const result = yield call(editInformationAPI, action.data);
		yield put({
			type: EDIT_INFORMATION_SUCCESS,
			data: result.data,
		});
	} catch(e){
		console.error(e);
		yield put({
			type: EDIT_INFORMATION_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchEditInformation() {
	yield takeLatest(EDIT_INFORMATION_REQUEST, editInformation);
}

function loadInfoAPI() {
	return axios.get('/information')
}

function* loadInfo() {
	try {
		const result = yield call(loadInfoAPI);
		yield put({
			type: LOAD_INFORMATION_SUCCESS,
			data: result.data,
		})
	} catch (e) {
		console.error(e);
		yield put({
			type: LOAD_INFORMATION_FAILURE,
			error: e.response.data,
		})
	}
}

function* watchLoadInfo() {
	yield takeLatest(LOAD_INFORMATION_REQUEST, loadInfo);
}

export default function* informationSaga() {
	yield all([
		fork(watchChangeFav),
		fork(watchEditInformation),
		fork(watchLoadInfo),
	])
};
