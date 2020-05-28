import React from 'react';
import './payment.styles.scss';
import StripeCheckout from "../stripe-button/stripe-checkout.component";
import { withRouter } from "react-router-dom";

const Payment = ({totalPrice, match, history}) => {
  const onSuccessfulCheckout = () => {
    alert('SUCCESS');
  };
  return (
    <div className='popup-payment'>
      <div className="popup-dialog">
        <div className="popup-content">
          <StripeCheckout price={totalPrice} onSuccessfulCheckout={onSuccessfulCheckout}/>

          <span className='test-fakecard'>
            <p className='title'>Use following fake card for testing payments: </p>
            4242 4242 4242 4242 - exp.: 01/21 - CVV: 123
          </span>
          <button className='popup-close' onClick={() => history.push(`/checkout`)}>
            <strong>✕</strong>
          </button>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Payment);