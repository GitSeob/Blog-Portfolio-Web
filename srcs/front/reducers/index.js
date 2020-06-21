import { combineReducers } from 'redux';
import portfolio from './portfolio';
import admin from './admin';
import posts from './posts';
import manage from './manage';

const rootReducer = combineReducers({
	portfolio,
	admin,
	posts,
	manage,
})

export default rootReducer
