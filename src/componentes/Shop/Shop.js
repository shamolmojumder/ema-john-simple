import React, { useState } from 'react';

import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const handleAddProduct = (product) => {
        console.log("added", product);
    }
    return (
        <div className="shop-container">

            <div className="product-container">

                {
                    products.map(pd =>
                        <Product
                            handleAddProduct={handleAddProduct}
                            product={pd}>
                        </Product>)
                }

            </div>
            <div className="cart-container">
                <h1>This is cart</h1>
            </div>

        </div>
    );
};

export default Shop;