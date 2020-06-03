import React from 'react';
import styled from "styled-components";
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn/>
      <SignUp />
    </SignInAndSignUpContainer>
  );
}


export default SignInAndSignUpPage;
