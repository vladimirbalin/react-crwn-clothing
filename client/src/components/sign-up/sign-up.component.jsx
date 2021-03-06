import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;
const Title = styled.h2`
  margin: 10px 0;
`;

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword){
      alert('passwords dont match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch(e) {
      console.log(e);
    }
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <Title className="title">I do not have a account</Title>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="displayName"
            type="displayName"
            value={displayName}
            required
            label={"Display name"}
          />
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={email}
            required
            label={"E-mail"}
          />

          <FormInput
            handleChange={this.handleChange}
            name="password"
            type="password"
            value={password}
            required
            label={"Password"}
          />
          <FormInput
            handleChange={this.handleChange}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            required
            label={"Confirm password"}
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
