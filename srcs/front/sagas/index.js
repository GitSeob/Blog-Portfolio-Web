import axios from 'axios';
import { all, call } from 'redux-saga/effects';
import portfolio from './portfolio';
import admin from './admin';
import posts from './posts';
import information from './information';
import { backUrl } from '../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga(){
	yield all([
		call(portfolio),
		call(admin),
		call(posts),
		call(information),
	])
}
