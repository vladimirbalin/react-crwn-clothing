import React from 'react';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectCartItems, selectTotalCartItemsPrice } from "../../redux/cart/cart-selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Payment from "../../components/payment/payment.component";


const Checkout = ({ cartItems, totalPrice, history, match, location }) => {

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

      <CustomButton onClick={() => history.push(`${match.url}/payment`)}>to the payment</CustomButton>
      {match.params.payment && <Payment />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectTotalCartItemsPrice
  }
);

export default compose(
  connect(mapStateToProps),

)(Checkout);
