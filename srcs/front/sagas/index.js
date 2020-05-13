import { all, call } from 'redux-saga/effects';
import portfolio from './portfolio';

export default function* rootSaga(){
	yield all([
		call(portfolio),
	])
}
