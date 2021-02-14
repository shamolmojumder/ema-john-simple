import React, { useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { fakedata } from '../data/fakeData';

const Review = () => {
    const {cart,setCart} = ([])    
    useEffect(()=>{
        // cart
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart)
        const counts=productKeys.map(key => {
          const product = fakedata
        })
        console.log(counts);
    })
    return (
        <div>
            <h1>Review component</h1>
        </div>
    );
};

export default Review;