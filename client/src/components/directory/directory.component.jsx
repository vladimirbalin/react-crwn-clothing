import './directory.styles.scss'
import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from "reselect";
import { selectSectionsDirectory } from "../../redux/directory/directory-selectors";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(({id, ...otherSectionParams}) =>
        <MenuItem key={id} {...otherSectionParams} />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    sections: selectSectionsDirectory
  }
);

export default connect(mapStateToProps)(Directory);