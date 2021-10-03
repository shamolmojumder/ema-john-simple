import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart] = useState([]);
    const [orderPlaced,setorderPlaced]=useState(false)
    const history=useHistory()
    const handleProceedCheckout=()=>{
        // setCart([])
        // setorderPlaced(true)
        // processOrder()
        // console.log("ordered");
        history.push('/shipment')
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
        fetch('https://stormy-everglades-30231.herokuapp.com/productsByKeys',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(productKeys)
        })
        .then(res=>res.json())
        .then(data=>setCart(data))
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
                    <button onClick={handleProceedCheckout} className="main-button">Proceed Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;