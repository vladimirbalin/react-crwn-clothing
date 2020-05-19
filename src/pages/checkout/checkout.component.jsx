import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectTotalCartItemsPrice } from "../../redux/cart/cart-selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";


const Checkout = ({ cartItems, totalPrice }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
      <div className="total">
        TOTAL: ${totalPrice}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalCartItemsPrice
  }
);

export default connect(mapStateToProps)(Checkout);
