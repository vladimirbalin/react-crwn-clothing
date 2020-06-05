import { selectCollectionIsLoading } from "../../redux/shop/shop-selectors";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collection.component";
import { connect } from "react-redux";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionIsLoading(state)
})

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);