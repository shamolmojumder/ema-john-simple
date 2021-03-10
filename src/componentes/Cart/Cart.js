import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
//    console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price*product.quantity;
        //debugger;
    }
    let shipping = 0;

    if (total > 35) {
        shipping = 0
    } else if (total > 15) {
        shipping = 4.99
    } else if (total > 0) {
        shipping = 12.99;
    }
    const tax = Math.round(total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    const formatNumber = num => {
        const priecision = num.toFixed(2);
        return Number(priecision)
    }
    return (
        <div>
            <p>Order items : {cart.length}</p>
            <p>Product Price:{formatNumber(total)} </p>
            <p>Shipping: {shipping} </p>
            <p>Tax+vat: {tax} </p>
            <p>Total: {grandTotal} </p>
            <Link to="/review"> <button className="main-button"> Review Order</button> </Link>
        </div>
    );
};

export default Cart;