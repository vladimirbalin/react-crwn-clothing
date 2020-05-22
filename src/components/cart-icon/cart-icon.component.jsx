import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { toggleDropdown } from '../../redux/cart/cart-reducer';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

const CartIcon = ({ toggleDropdown, itemCount }) => {
  return (
    <div className="cart-icon"
         onClick={toggleDropdown}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector(
  {
    itemCount: selectCartItemsCount
  }
);

export default connect(mapStateToProps, {toggleDropdown})(CartIcon);
