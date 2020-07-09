import { combineReducers } from 'redux';
import portfolio from './portfolio';
import admin from './admin';
import posts from './posts';
import manage from './manage';
import information from './information';

const rootReducer = combineReducers({
	portfolio,
	admin,
	posts,
	manage,
	information,
})

export default rootReducer
