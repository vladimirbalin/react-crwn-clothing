import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {removeItem} from "../../redux/cart/cart-reducer";

const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 15px;
  padding-right: 5px;
`;

const Image = styled.img`
  width: 30%;
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const Name = styled.span`
  font-size: 16px;
`;
const Price = styled.span``;
const RemoveItem = styled.span`
  cursor: pointer;
`;

const CartItem = ({ item, removeItem }) => {
  const { imageUrl, price, name, quantity } = item;
  const removeItemFromCart = () => removeItem(item);
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt='item'/>
      <ItemDetails>
        <Name>{name} </Name>
        <Price>{quantity} x ${price}</Price>
      </ItemDetails>

      <RemoveItem onClick={removeItemFromCart}>&#10005;</RemoveItem>
    </CartItemContainer>
  );
};

export default connect(null, {removeItem})(CartItem);
