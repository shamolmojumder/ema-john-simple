import React from 'react';
import fakeData from '../../fakeData'

const Inventory = () => {
    const handleAddProduct=()=>{
        fetch('http://localhost:5000/addProduct',{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body:JSON.stringify(fakeData)
        })        
    }
    return (
        <div>
           <button onClick={handleAddProduct}>Add product</button>
        </div>
    );
};

export default Inventory;