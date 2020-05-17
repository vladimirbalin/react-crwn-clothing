import { compose, applyMiddleware, createStore } from 'redux';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger)));