import { combineReducers } from 'redux';
import portfolio from './portfolio';
import admin from './admin';
import posts from './posts';

const rootReducer = combineReducers({
	portfolio,
	admin,
	posts,
})

export default rootReducer
