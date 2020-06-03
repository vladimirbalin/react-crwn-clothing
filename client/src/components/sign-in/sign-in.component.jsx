import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import styled from "styled-components";

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  margin: 30px 0 15px 0;
`;
const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try{
      const result = await auth.signInWithEmailAndPassword(email, password);
      console.log(result);
      this.setState({
        email: "",
        password: "",
      });
    } catch(e) {
      console.log(e);
    }
    
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
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

          <ButtonsBlock>
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              SIGN IN with Google
            </CustomButton>
          </ButtonsBlock>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
