import React from "react";
import './collection.styles.scss';
import { selectExactCollection } from "../../redux/shop/shop-selectors";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className="title">{ title }</h2>
      <div className="items">
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>

    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectExactCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);