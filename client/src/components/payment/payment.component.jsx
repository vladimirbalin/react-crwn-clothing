import React from 'react';
import StripeCheckout from "../stripe-button/stripe-checkout.component";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const PopupPayment = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
`;
const PopupContent = styled.div`
  position: fixed;
  padding: 10px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 25vw;
  background-color: #ffffff;
  text-align: center;
`;
const PopupDialog = styled.div``;
const TestFakeCard = styled.span`
  margin: 15px;
  font-size: 25px;
  color: red;
  text-align: center;
`;
const Title = styled.p`
  margin-bottom: 10px;
`;
const PopupClose = styled.button`
  position: absolute;
  top: -10px;
  right: -50px;
  font-size: 25px;
  color: #ffffff;
  border: none;
  background: transparent;
  cursor: pointer;
  &:focus{
    outline: none;
  }
`;

const Payment = ({ history }) => {
  const onSuccessfulCheckout = () => {
    alert('SUCCESS');
  };
  return (
    <PopupPayment>
      <PopupDialog>
        <PopupContent>
          <StripeCheckout onSuccessfulCheckout={onSuccessfulCheckout}/>

          <TestFakeCard>
            <Title className='title'>Use following fake card for testing payments: </Title>
            4242 4242 4242 4242 - exp.: 01/21 - CVV: 123
          </TestFakeCard>
          <PopupClose onClick={() => history.push(`/checkout`)}>
            <strong>✕</strong>
          </PopupClose>
        </PopupContent>
      </PopupDialog>
    </PopupPayment>
  )
};

export default withRouter(Payment);