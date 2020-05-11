import "./sign-in.styles.scss";
import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(){
    super();
    this.state = {
    email: "",
    password: "",
  }
  console.log(this)
}
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            required
            label={"E-mail"}
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={this.state.password}
            required
            label={"Password"}
          />

          <div className='buttons'>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN with Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
