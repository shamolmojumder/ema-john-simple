import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Jtz3hHxWwTglU5WMD9oNrwK805UdCmPFIuXV2gN51CGJb0SwZUGT79zPFlPBOUHxKvXsgpJpPHEdul54XBqpElx00PTFD57P3');
const ProcessPayment = () => {

  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
          
    </Elements>
  );
};

export default ProcessPayment;