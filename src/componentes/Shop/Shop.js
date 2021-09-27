import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        if (products.length>0) {
            const previousCart=productKeys.map(existingKey =>{
                const product=products.find(pd=>pd.key=== existingKey);
                product.quantity=savedCart[existingKey];
                return product;
            })
            setCart(previousCart);
        }
    },[products])
    

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
                     products.length ===0 && <p>loading...</p>
                 }
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