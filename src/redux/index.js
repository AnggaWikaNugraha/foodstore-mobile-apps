import {applyMiddleware, createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './storeGlobal';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  {},
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;