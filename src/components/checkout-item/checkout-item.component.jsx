import React from 'react';
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { decreaseQuantity, addItem, removeCartItem } from "../../redux/cart/cart-reducer";

const CheckOutItem = ({ cartItem, decreaseQuantity, addItem, removeCartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const decreaseQuantityHandler = () => decreaseQuantity(cartItem);
  const increaseQuantityHandler = () => addItem(cartItem);
  const removeItemFromCart = () => removeCartItem(cartItem);

  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="increase-decrease" onClick={decreaseQuantityHandler}>&#10094;</div>
        {quantity}
        <div className="increase-decrease" onClick={increaseQuantityHandler}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={removeItemFromCart}>&#10005;</div>
    </div>
  )
};


export default connect(null, {decreaseQuantity, addItem, removeCartItem})(CheckOutItem);