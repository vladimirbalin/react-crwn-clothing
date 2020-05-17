import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleDropdown } from '../../redux/cart-reducer';

const CartIcon = ({ toggleDropdown }) => {

  return (
    <div className="cart-icon"
      onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}



export default connect(null, {toggleDropdown})(CartIcon);
