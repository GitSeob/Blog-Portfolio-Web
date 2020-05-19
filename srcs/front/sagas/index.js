import { all, call } from 'redux-saga/effects';
import portfolio from './portfolio';
import admin from './admin';

export default function* rootSaga(){
	yield all([
		call(portfolio),
		call(admin),
	])
}
