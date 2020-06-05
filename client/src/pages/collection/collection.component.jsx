import React from "react";
import { selectExactCollection } from "../../redux/shop/shop-selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import styled from "styled-components";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CollectionItemContainer = styled(CollectionItem)`
  margin-bottom: 30px;
  margin-right: 10px;
`;

const CollectionPage = ({ collection, ...otherProps }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <Title>{ title }</Title>
      <Items>
        {
          items.map(item => <CollectionItemContainer key={item.id} item={item}/>)
        }
      </Items>
    </CollectionPageContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  collection: (state, ownProps) => selectExactCollection(ownProps.match.params.collectionId)(state)
});

export default compose(
  connect(mapStateToProps)
)(CollectionPage);
