import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';
import userReducer from '../pages/userList/reducer';

const createReducer = history => {
	return combineReducers({
		router: connectRouter(history),
		browser: createResponsiveStateReducer({
			mobile: 320,
			tablet: 768,
			desktop: 1024
		}),
		userReducer: userReducer
	});
};

export default createReducer;
