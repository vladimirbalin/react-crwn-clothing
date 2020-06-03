import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectCartItems, selectTotalCartItemsPrice } from "../../redux/cart/cart-selectors";
import styled from "styled-components";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Payment from "../../components/payment/payment.component";

const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;
const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;
const Title = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
const Checkout = ({ cartItems, totalPrice, history, match, location }) => {

  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem}/>)}
      <Title>
        TOTAL: ${totalPrice}
      </Title>

      <CustomButton onClick={() => history.push(`${match.url}/payment`)}>to the payment</CustomButton>
      {match.params.payment && <Payment />}
    </CheckoutPageContainer>
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
