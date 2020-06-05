import React from "react";
import CollectionItem from '../collection-item/collection-item.component';
import styled from "styled-components";
import {withRouter} from "react-router-dom";

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;
const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items, history, match }) => {
  const clickHandler = () => history.push(`${match.url}/${title.toLowerCase()}`);
  return (
    <CollectionPreviewContainer>
      <Title onClick={clickHandler}>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((el, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
        ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
