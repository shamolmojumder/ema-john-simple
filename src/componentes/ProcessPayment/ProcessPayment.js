import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import simpleCardPayment from './simpleCardPayment';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51Jtz3hHxWwTglU5WMD9oNrwK805UdCmPFIuXV2gN51CGJb0SwZUGT79zPFlPBOUHxKvXsgpJpPHEdul54XBqpElx00PTFD57P3');
const ProcessPayment = () => {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };
  return (
    <Elements stripe={stripePromise}>
      <h1>Pay first </h1>
          <simpleCardPayment></simpleCardPayment>
    </Elements>
  );
};

export default ProcessPayment;