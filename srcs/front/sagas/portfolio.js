import { all, fork, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOAD_DATA_REQUEST, LOAD_DATA_SUCCUESS, LOAD_DATA_FAILURE } from '../reducers/portfolio';

function loadPortfolioAPI(){

};

function* loadPortfolio(action){
	console.log('loadPortfolio');
	try{
		const result = yield call(loadPortfolioAPI)
		yield put({
			type: LOAD_DATA_SUCCUESS,
			data: result.data
		})
	} catch(e){
		yield put({
			type: LOAD_DATA_FAILURE,
			error: e
		})
	}
}

function* watchLoadPort(){
	console.log('watch func');
	yield takeLatest(LOAD_DATA_REQUEST, loadPortfolio);
}

export default function* userSaga(){
	yield all([
		fork(watchLoadPort),
	])
}
