import ShopPage from "./shop.component";
import React from "react";
import {fetchCollectionAsync} from "../../redux/shop/shop-reducer";
import {connect} from "react-redux";

class ShopPageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionAsync();
  }

  render() {
    let {fetchCollectionAsync, ...otherProps} = this.props;
    return <ShopPage {...otherProps}/>
  }
}

export default connect(null, {fetchCollectionAsync})(ShopPageContainer);