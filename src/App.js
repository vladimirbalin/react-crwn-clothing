import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  state = {
    currentUser: null,
  };
  unsubscribeFromAuth = null;

  componentDidMount() {
    //subscriber on logged in firebase user
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState(() => (
        { currentUser: user }
      ));
    });
  };

  componentWillUnmount() {
    //unsubscribe
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path='/sign-in' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
