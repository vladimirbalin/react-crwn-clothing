import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user-reducer";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    
    //subscribe on logged in firebase user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot((snapShot) => {
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
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" render={()=> this.props.currentUser ? <Redirect to='/'/> : <SignInAndSignUpPage/>} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => ({currentUser: state.user.currentUser})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
