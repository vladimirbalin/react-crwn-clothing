import ShopPage from "./shop.component";
import React from "react";
import { fetchCollectionStarted } from "../../redux/shop/shop-reducer";
import { connect } from "react-redux";
import { compose } from "redux";

class ShopPageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionStarted();
  }

  render() {
    const {...otherProps} = this.props;
    return <ShopPage {...otherProps}/>
  }
}

export default compose(
  connect(null, {fetchCollectionStarted})
)(ShopPageContainer);