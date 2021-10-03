import React from 'react';

const Inventory = () => {
    const handleAddProduct=()=>{
        const product={};
        fetch('https://stormy-everglades-30231.herokuapp.com/addProduct',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify(product)
        })        
    }
    return (
        <div>
            <form action="">
            <p><span>Name</span><input type="text" /></p>
            <p><span>Price</span><input type="text" /></p>
            <p><span>Quantity</span><input type="text" /></p>
            <p><span>Product image</span><input type="file"/></p>
           <button onClick={handleAddProduct}>Add product</button>
            </form>
        </div>
    );
};

export default Inventory;

// emaJohnStore.products
