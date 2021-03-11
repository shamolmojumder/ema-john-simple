import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setorderPlaced]=useState(false)
    const handlePlaceorder=()=>{
       setCart([])
       setorderPlaced(true)
        processOrder()
        console.log("ordered");
    }

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
            //console.log(product.name,product.quantity);
            return product;
        });
        setCart(cartProducts)
    }, [])
   
    let thankYou;
    if (orderPlaced) {
        thankYou=<img src={happyImage} alt=""/>
    }
    return (
        <div className="twin-container">
        {/* <h1>Review component  {cart.length} </h1> */}
        <div className="product-container">
        {        
             cart.map(pd=> <ReviewItem  product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem> )
        }
        {
            thankYou
        }
        </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceorder} className="main-button">Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;