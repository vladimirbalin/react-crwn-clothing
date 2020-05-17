import userReducer from './user-reducer';
import { combineReducers } from 'redux';
import { cartReducer } from './cart-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

