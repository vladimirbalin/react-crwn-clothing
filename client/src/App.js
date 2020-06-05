import React from "react";
import "./App.css";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Switch, Route, Redirect } from "react-router-dom";
//comps
import HomePage from "./pages/homepage/homepage.component";
import ShopPageContainer from "./pages/shop/shop.container";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import Checkout from "./pages/checkout/checkout.component";
//selectors
import { setCurrentUser } from "./redux/user/user-reducer";
import { selectCurrentUser } from "./redux/user/user-selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    //subscribe on logged in firebase user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {

      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(user);
      }
    });
  }

  componentWillUnmount() {
    //unsubscribe
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPageContainer} />
          <Route path="/checkout/:payment?" component={Checkout} />
          <Route path="/sign-in" render={()=> this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, {setCurrentUser})(App);
