import { selectCollectionIsFetching } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCollectionIsFetching,
})

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
