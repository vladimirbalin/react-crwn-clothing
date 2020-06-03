import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { toggleDropdown } from '../../redux/cart/cart-reducer';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import styled from "styled-components";

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ShoppingIconStyles = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;

const CartIcon = ({ toggleDropdown, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleDropdown}>
      <ShoppingIconStyles/>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

const mapStateToProps = createStructuredSelector(
  {
    itemCount: selectCartItemsCount
  }
);

export default connect(mapStateToProps, {toggleDropdown})(CartIcon);
