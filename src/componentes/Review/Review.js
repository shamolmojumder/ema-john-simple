import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';


const Review = () => {
    const [cart,setCart] = useState([]);
    const removeProduct=(productKey)=>{
       // console.log(`product remove clicked ${productKey}`);
        const newCart=cart.filter(pd=>pd.key !== productKey);
        setCart(newCart)
        removeFromDatabaseCart(productKey);
    }
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
        <div className="twin-container">
        {/* <h1>Review component  {cart.length} </h1> */}
        <div className="product-container">
        {        
             cart.map(pd=> <ReviewItem  product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem> )
        }
        </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;