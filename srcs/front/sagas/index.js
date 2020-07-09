import axios from 'axios';
import { all, call } from 'redux-saga/effects';
import portfolio from './portfolio';
import admin from './admin';
import posts from './posts';
import information from './information';

axios.defaults.baseURL = 'http://localhost:3065/api'

export default function* rootSaga(){
	yield all([
		call(portfolio),
		call(admin),
		call(posts),
		call(information),
	])
}
