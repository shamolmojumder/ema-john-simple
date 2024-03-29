import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
const ProudctDetail = () => {
    const {productKey}=useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
        fetch('https://stormy-everglades-30231.herokuapp.com/product/'+productKey)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[productKey])
    
    return (
        <div>
            <h1> Product Details</h1>
            <Product showAddtoCart={false} product={product}></Product>
        </div>
    );
};

export default ProudctDetail;