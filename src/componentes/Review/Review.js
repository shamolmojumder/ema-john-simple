import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart,setCart] = useState([])    
    useEffect(()=>{
        // cart
        const savedCart=getDatabaseCart(); //obj
        const productKeys=Object.keys(savedCart)//array
        const cartProducts=productKeys.map(key => {
            const product =fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
        setCart(cartProducts)
    }, [])
    return (
        <div>
            <h1>Review component  {cart.length} </h1>
            {
                cart.map(pd=> 
                <ReviewItem  product={pd} key={pd.key}></ReviewItem> )
            }
        </div>
    );
};

export default Review;