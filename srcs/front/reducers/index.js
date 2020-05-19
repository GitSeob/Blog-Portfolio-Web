import { combineReducers } from 'redux';
import portfolio from './portfolio';
import admin from './admin';

const rootReducer = combineReducers({
	portfolio,
	admin
})

export default rootReducer
