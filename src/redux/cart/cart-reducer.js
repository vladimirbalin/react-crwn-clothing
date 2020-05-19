import { addItemToCart, decreaseQuantityOfItem, removeItemFromCart } from './cart.utils';

const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
const ADD_ITEM = 'ADD_ITEM';
const DECREASE_QUANTITY_OF_ITEM = 'DECREASE_QUANTITY_OF_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

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
    case DECREASE_QUANTITY_OF_ITEM:
      return {
        ...state,
        cartItems: decreaseQuantityOfItem(state.cartItems, action.payload)
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};



export const toggleDropdown = () => ({type: TOGGLE_DROPDOWN});
export const addItem = item => ({type: ADD_ITEM, payload: item});
export const decreaseQuantity = (item) => ({type: DECREASE_QUANTITY_OF_ITEM, payload: item});
export const removeCartItem = (item) => ({type: REMOVE_ITEM, payload: item});