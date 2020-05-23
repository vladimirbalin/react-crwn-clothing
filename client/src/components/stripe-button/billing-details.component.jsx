import React from "react";
import FormInput from "../form-input/form-input.component";
import './stripe-checkout.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { CardElement } from "@stripe/react-stripe-js";

function BillingDetails(props) {
  const {
    name, email, address, city, zip,
    isProcessing, stripe, price,
    handleChange, handleCardDetailsChange
  } = props;
  return (
    <>
      <FormInput
        name="name"
        label="Name"
        type="text"
        handleChange={handleChange}
        value={name}
        placeholder="Jane Doe"
        required
      />
      <FormInput
        name="email"
        label="Email"
        type="email"
        handleChange={handleChange}
        value={email}
        placeholder="jane.doe@example.com"
        required
      />
      <FormInput
        name="address"
        label="Address"
        type="text"
        handleChange={handleChange}
        value={address}
        placeholder="185 Berry St. Suite 550"
        required
      />
      <FormInput
        name="city"
        label="City"
        type="text"
        handleChange={handleChange}
        value={city}
        placeholder="San Francisco"
        required
      />
      <FormInput
        name="zip"
        label="ZIP"
        type="text"
        handleChange={handleChange}
        value={zip}
        placeholder="94103"
        required
      />
      <div className='card-element-container'>
        <CardElement options={{hidePostalCode: true}}
                     onChange={handleCardDetailsChange}/>
      </div>
      <CustomButton disabled={isProcessing || !stripe}>Pay ${price}</CustomButton>
    </>
  );
}

export default BillingDetails;