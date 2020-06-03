import React from 'react';
import { connect } from "react-redux";
import { removeItem, addItem, clearItemFromCart } from "../../redux/cart/cart-reducer";
import styled from "styled-components";

const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Name = styled.span`
  width: 23%;
`;
const Quantity = styled.span`
  width: 23%;
  display: flex;
`;
const Price = styled.span`
  width: 23%;
`;
const ChangeCount = styled.div`
  cursor: pointer;
  padding: 0 10px;
`;
const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

const CheckOutItem = ({ cartItem, removeItem, addItem, clearItemFromCart }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const decreaseQuantityHandler = () => removeItem(cartItem);
  const increaseQuantityHandler = () => addItem(cartItem);
  const removeItemFromCart = () => clearItemFromCart(cartItem);

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <ChangeCount onClick={decreaseQuantityHandler}>&#10094;</ChangeCount>
        {quantity}
        <ChangeCount onClick={increaseQuantityHandler}>&#10095;</ChangeCount>
      </Quantity>
      <Price>${price}</Price>
      <RemoveButton onClick={removeItemFromCart}>&#10005;</RemoveButton>
    </CheckOutItemContainer>
  )
};


export default connect(null, {removeItem, addItem, clearItemFromCart})(CheckOutItem);