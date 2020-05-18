import userReducer from './user/user-reducer';
import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart-reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

