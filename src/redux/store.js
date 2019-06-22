import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import { persistConfig } from '../config/persist-config';

let store;
const history =
  process.env.NODE_ENV === 'test'
    ? createMemoryHistory()
    : createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, createReducer(history));

export const configureStore = () => {
  const middlewares = Array.prototype.concat(
    [],
    [thunk, routerMiddleware(history)],
    process.env.NODE_ENV === 'development' ? [createLogger()] : []
  );

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    responsiveStoreEnhancer
  );

  //store = createStore(createReducer(history), enhancer);
  store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  store.asyncReducers = {};

  return {
    store,
    persistor,
    history
  };
};
