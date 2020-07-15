import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import portfolio from './portfolio';
import admin from './admin';
import posts from './posts';
import manage from './manage';
import information from './information';

const rootReducer = (state, action) => {
	switch (action.type) {
		case HYDRATE:
			return action.payload;
		default: {
			const combineReducer = combineReducers({
				portfolio,
				admin,
				posts,
				manage,
				information,
			});
			return combineReducer(state, action);
		}
	}
};

export default rootReducer
