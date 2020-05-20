import { addItemToCart, removeItemFromCart } from './cart.utils';

const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const CLEAR_ITEM = 'CLEAR_ITEM';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };    
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      };
    default:
      return state;
  }
};



export const toggleDropdown = () => ({type: TOGGLE_DROPDOWN});
export const addItem = item => ({type: ADD_ITEM, payload: item});
export const removeItem = (item) => ({type: REMOVE_ITEM, payload: item});
export const clearItemFromCart = (item) => ({type: CLEAR_ITEM, payload: item});