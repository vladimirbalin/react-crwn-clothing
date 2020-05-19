import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { compose } from 'redux';
import { toggleDropdown } from "../../redux/cart/cart-reducer";

const CartDropDown = ({ cartItems, history, toggleDropdown }) => {
  const goToCheckoutPage = () => {
    toggleDropdown();
    history.push('/checkout')};
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          :
          <span className='empty-message'>Your cart is empty</span>
        }
        <CustomButton onClick={goToCheckoutPage}>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector(
  {
    cartItems: selectCartItems,
  });
export default compose(
  withRouter,
  connect(mapStateToProps, {toggleDropdown}),
)
(CartDropDown);
