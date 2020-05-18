import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
        }
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    cartItems: selectCartItems,
  });
export default connect(mapStateToProps)(CartDropDown);