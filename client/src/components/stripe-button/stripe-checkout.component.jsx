import React, { useState } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import './stripe-checkout.styles.scss';
import BillingDetails from "./billing-details.component";
import axios from "axios";

const StripeCheckout = ({price, onSuccessfulCheckout}) => {

  const [isProcessing, setProcessingTo] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'city':
        setCity(value);
        break;
      case 'zip':
        setZip(value);
        break;
      default:
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleCardDetailsChange = ev => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const billingDetails = {
      name: name,
      email: email,
      address: {
        city: city,
        line1: address,
        postal_code: zip
      }
    };

    setProcessingTo(true);

    const cardElement = elements.getElement("card");

    try {
      const {data: clientSecret} = await axios.post("payment", {
        amount: price * 100,

      });

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessingTo(false);
        return;
      }

      const {error} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessingTo(false);
        return;
      }

      setName('');
      setAddress('');
      setEmail('');
      setCity('');
      setZip('');

      onSuccessfulCheckout();

    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  return (
    <form className='stripe-form' onSubmit={handleFormSubmit}>
      <BillingDetails isProcessing={isProcessing}
                      stripe={stripe}
                      price={price}
                      name={name}
                      address={address}
                      email={email}
                      city={city}
                      zip={zip}
                      handleChange={handleChange}
                      handleCardDetailsChange={handleCardDetailsChange}/>
      {checkoutError && (<span>{checkoutError}</span>)}
    </form>);

};

export default StripeCheckout;