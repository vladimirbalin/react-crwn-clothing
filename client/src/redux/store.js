import { compose, applyMiddleware, createStore } from 'redux';
import persistReducer from './root-reducer';
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import thunk from 'redux-thunk';
import { fetchCollectionStart } from './shop/shop.sagas';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(persistReducer, composeEnhancers(applyMiddleware(...middlewares)));
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);