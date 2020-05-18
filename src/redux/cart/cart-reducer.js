import { addItemToCart } from './cart.utils';

const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
const ADD_ITEM = 'ADD_ITEM';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

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
    default:
      return state;
  }
}



export const toggleDropdown = () => ({type: TOGGLE_DROPDOWN});
export const addItem = item => ({type: ADD_ITEM, payload: item})