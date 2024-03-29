import React, { useEffect, useState } from 'react';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css'


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [search, setSearch] = useState('')
    useEffect(()=>{
        // fetch('https://stormy-everglades-30231.herokuapp.com/products?search='+search)
        fetch('http://localhost:5055/products?search='+search)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[search])
    const handleSearch=(event)=>{
        setSearch(event.target.value)
    }
    useEffect(()=>{
        const savedCart=getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        fetch('https://stormy-everglades-30231.herokuapp.com/productsByKeys',{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(productKeys)
        })
        .then(res=>res.json())
        .then(data=>setCart(data))
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
                 <input type="text" onChange={handleSearch} className="product-search" placeholder="Search"/>
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