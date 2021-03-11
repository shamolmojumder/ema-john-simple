import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData'
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart)
    //    console.log(typeof(savedCart));
        const previousCart=productKeys.map(existingKey =>{
            const product=fakeData.find(pd=>pd.key=== existingKey);
            product.quantity=savedCart[existingKey];
            return product;
        })
        setCart(previousCart)
    },[])
    

    const handleAddProduct = (product) => {
        const toBeAdded=product.key;
        const sameProduct=cart.find(pd=>pd.key===toBeAdded);
        let count=1;
        let newCart;
        if (sameProduct) {
            count=sameProduct.quantity+1;
            sameProduct.quantity=count;
            const others=cart.filter(pd=> pd.key !== toBeAdded);
            newCart=[...others,sameProduct]
            // debugger;
        }else{
            product.quantity=1;
            newCart=[...cart,product]
        }
        setCart(newCart)
      //  console.log("added", product);
        addToDatabaseCart(product.key,count);
    }
    return (
        <div className="twin-container">
             <div className="product-container">
                {
                    products.map(pd =>
                        <Product
                            key={pd.key}
                            showAddToCart={true}
                            handleAddProduct={handleAddProduct}
                            product={pd}>
                        </Product>)
                }
            </div>
            <div className="cart-container">
                <small>This is card from shop js</small>
                <Cart cart={cart}>
                     <Link to="/review"> <button className="main-button"> Review Order</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;