import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selectors";
import {compose} from "redux";

const CollectionOverview = ({ collections, categoryId }) => {

  return (
    <div className='collection-overview'>
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  }
);

export default compose(
  connect(mapStateToProps)
)(CollectionOverview);