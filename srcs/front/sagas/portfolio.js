import { all, fork, call, takeLatest, takeEvery, put } from 'redux-saga/effects';
import {
	LOAD_DATA_REQUEST,
	LOAD_DATA_SUCCUESS,
	LOAD_DATA_FAILURE,
} from '../reducers/portfolio';

const HELLO_SAGA = 'HELLO_SAGA'
const BYE_SAGA = 'BYE_SAGA'


function loadPortfolioAPI(){
	console.log('api function');
};

function* loadPortfolio(action){
	console.log('loadPortfolio');
	try{
		// const result = yield call(loadPortfolioAPI)
		yield put({
			type: LOAD_DATA_SUCCUESS,
			// data: result.data
		})
	} catch(e){
		yield put({
			type: LOAD_DATA_FAILURE,
			error: e
		})
	}
}

function* watchLoadPort(){
	// console.log('watch func');
	yield takeLatest(LOAD_DATA_REQUEST, loadPortfolio);
}

function* watchHello(){
	yield takeEvery(HELLO_SAGA, function*(){
		yield put({
			type: BYE_SAGA
		})
	})
}

export default function* portfolioSaga(){
	yield all([
		fork(watchLoadPort),
		fork(watchHello),
		// call과 fork의 차이
		// call은 ()내의 함수 종료까지 기다림 -> 동기호출
		// fork도 ()내의 함수 종료가 아니여도 다른 부분 수행 -> 비동기호출
	])
}
