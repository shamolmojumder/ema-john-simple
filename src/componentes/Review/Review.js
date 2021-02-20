import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';


const Review = () => {
    const {cart,setCart} = ([])    
    useEffect(()=>{
        // cart
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart)
        const cartProducts=productKeys.map(key => {
            const product =fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key]
            return product;
        })
        setCart(cartProducts)
    },[])
    return (
        <div>
            <h1>Review component  {cart.lenght} </h1>
        </div>
    );
};

export default Review;