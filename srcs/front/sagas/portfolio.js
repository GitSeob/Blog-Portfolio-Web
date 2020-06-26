import { all, fork, call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {
	LOAD_PORT_DATA_REQUEST,
	LOAD_PORT_DATA_SUCCESS,
	LOAD_PORT_DATA_FAILURE,
} from '../reducers/portfolio';


function loadPortfolioAPI(){
	return axios.get('/portfolio', {
		withCredentials: true,
	});
};

function* loadPortfolio(action){
	try{
		const result = yield call(loadPortfolioAPI)
		// console.log(result.data);
		yield put({
			type: LOAD_PORT_DATA_SUCCESS,
			data: result.data
		})
	} catch(e){
		yield put({
			type: LOAD_PORT_DATA_FAILURE,
			error: e
		})
	}
}

function* watchLoadPort(){
	yield takeLatest(LOAD_PORT_DATA_REQUEST, loadPortfolio);
}

export default function* portfolioSaga(){
	yield all([
		fork(watchLoadPort),
		// call과 fork의 차이
		// call은 ()내의 함수 종료까지 기다림 -> 동기호출
		// fork도 ()내의 함수 종료가 아니여도 다른 부분 수행 -> 비동기호출
	])
}
