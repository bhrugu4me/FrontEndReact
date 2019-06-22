import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';
// reducers

const createReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    browser: createResponsiveStateReducer({
      mobile: 768,
      tablet: 1024,
      desktop: 1130
    })
  });
};

export default createReducer;
