import React from 'react';
import './checkout-item.styles.scss';
import { connect } from "react-redux";
import { removeItem, addItem, clearItemFromCart } from "../../redux/cart/cart-reducer";

const CheckOutItem = ({ cartItem, removeItem, addItem, clearItemFromCart }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const decreaseQuantityHandler = () => removeItem(cartItem);
  const increaseQuantityHandler = () => addItem(cartItem);
  const removeItemFromCart = () => clearItemFromCart(cartItem);

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


export default connect(null, {removeItem, addItem, clearItemFromCart})(CheckOutItem);