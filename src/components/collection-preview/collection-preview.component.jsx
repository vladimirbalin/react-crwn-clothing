import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
  return (
    // <div className={`collection-preview-item`}
    //     onClick={() => history.push(`${match.url}${linkUrl}`)}>
    //   <div className='background-image' style={{
    //     backgroundImage: `url(${imageUrl})`
    //    }}/>
    //   <div className='content'>
    //     <h1 className='title'>{title.toUpperCase()}</h1>
    //     <span className='subtitle'>SHOP NOW</span>
    //   </div>
    // </div>

    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        .filter((el, idx) => idx < 4)
        .map(({ id, ...otherProps}) => (
          <CollectionItem key={id} {...otherProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
