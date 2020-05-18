import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-reducer";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  const handleClick = () => addItem(item);
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={handleClick} inverted>add to cart</CustomButton>
    </div>
  );
};

export default connect(null, {addItem})(CollectionItem);
