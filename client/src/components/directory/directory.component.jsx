import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from "reselect";
import { selectSectionsDirectory } from "../../redux/directory/directory-selectors";
import { connect } from "react-redux";
import styled from "styled-components";

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({id, ...otherSectionParams}) =>
        <MenuItem key={id} {...otherSectionParams} />
      )}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
    sections: selectSectionsDirectory
  }
);

export default connect(mapStateToProps)(Directory);