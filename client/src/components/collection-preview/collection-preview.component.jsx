import React from "react";
import CollectionItem from '../collection-item/collection-item.component';
import styled from "styled-components";

const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;
const Preview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CollectionPreview = ({ title, items }) => {
  
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
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

export default CollectionPreview;
