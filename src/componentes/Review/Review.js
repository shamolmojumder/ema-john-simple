import React, { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Review = () => {
    const {cart,setCart} = ([])    
    useEffect(()=>{
        // cart
        const savedCart=getDatabaseCart();
        console.log(savedCart);
    })
    return (
        <div>
            <h1>Review component</h1>
        </div>
    );
};

export default Review;