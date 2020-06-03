import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { compose } from 'redux';
import { toggleDropdown } from "../../redux/cart/cart-reducer";
import styled from "styled-components";

const CartDropDownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 360px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

const CartItemsContainer = styled.div`
  height: 250px; 
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

const CustomButtonContainer = styled(CustomButton)`
  margin-top: auto;
`;

const CartDropDown = ({ cartItems, history, toggleDropdown }) => {
  const goToCheckoutPage = () => {
    toggleDropdown();
    history.push('/checkout')};
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ?
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
          :
          <EmptyMessage>Your cart is empty</EmptyMessage>
        }

      </CartItemsContainer>
      <CustomButtonContainer onClick={goToCheckoutPage}>GO TO CHECKOUT</CustomButtonContainer>
    </CartDropDownContainer>
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
