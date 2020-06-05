import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-reducer";
import styled from "styled-components";

const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  ${CollectionItemContainer}:hover & {
    opacity: .8;
  }
`;
const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const Price = styled.span`
   width: 10%;
`;
const Button = styled(CustomButton)`
    width: 80%;
    opacity: .7;
    position: absolute;
    top: 255px;
    display: none;
    ${CollectionItemContainer}:hover & {
      opacity: .85;
      display: flex;
    }
`;

const CollectionItem = ({ item, addItem, className, history }) => {
  const { imageUrl, name, price } = item;
  const handleClick = () => addItem(item);

  return (
    <CollectionItemContainer className={className}>
      <ImageContainer imageUrl={imageUrl}  />
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </CollectionFooter>
      <Button onClick={handleClick} inverted>add to cart</Button>
    </CollectionItemContainer>
  );
};

export default connect(null, {addItem})(CollectionItem);
