import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce((acc, currValue) => acc + currValue.quantity, 0)
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectTotalCartItemsPrice = createSelector(
  [selectCartItems],
  cartItems => {
    return cartItems.reduce((acc, currValue) => acc + (currValue.quantity * currValue.price), 0)
  }
);