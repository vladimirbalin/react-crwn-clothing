import { compose, applyMiddleware, createStore } from 'redux';
import persistReducer from './root-reducer';
import { persistStore } from "redux-persist";
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
export const persistor = persistStore(store);
