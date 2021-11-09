import React from "react";
import FormInput, { Group, Input } from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { CardElement } from "@stripe/react-stripe-js";
import styled from "styled-components";

const FormInputContainer = styled(FormInput)`
  ${Group} {margin: 0};
  ${Input} {font-size: 16px}
`;

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border: 1px solid #a6abb0;
  margin: 10px;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`;
const SubmitButton = styled(CustomButton)`
  display: block;
  margin: 0 auto;

  &:disabled {
    opacity: .1;

    &:hover {
      background-color: black;
      color: white;
      cursor: auto;
      border: none;
    }
  }
`;
function BillingDetails(props) {
  const {
    name, email, address, city, zip,
    isProcessing, stripe, totalPrice,
    handleChange, handleCardDetailsChange
  } = props;
  return (
    <>
      <FormInputContainer
        name="name"
        label="Name"
        type="text"
        handleChange={handleChange}
        value={name}
        placeholder="Jane Doe"
        required
      />
      <FormInputContainer
        name="email"
        label="Email"
        type="email"
        handleChange={handleChange}
        value={email}
        placeholder="jane.doe@example.com"
        required
      />
      <FormInputContainer
        name="address"
        label="Address"
        type="text"
        handleChange={handleChange}
        value={address}
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormInputContainer
        name="city"
        label="City"
        type="text"
        handleChange={handleChange}
        value={city}
        placeholder="San Francisco"
        required
      />
      <FormInputContainer
        name="zip"
        label="ZIP"
        type="text"
        handleChange={handleChange}
        value={zip}
        placeholder="94103"
        required
      />
      <CardElementContainer>
        <CardElement options={{hidePostalCode: true}}
                     onChange={handleCardDetailsChange}/>
      </CardElementContainer>
      <SubmitButton type='submit' disabled={isProcessing || !stripe}>Pay ${totalPrice}</SubmitButton>
    </>
  );
}

export default BillingDetails;