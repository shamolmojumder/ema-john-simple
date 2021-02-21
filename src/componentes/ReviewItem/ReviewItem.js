import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity,img}=props.product;
    const reviewItemStyle={borderBottom:"1px solid lightgray",marginBottom:"5px",paddingBottom:"5px",marginLeft:"200px"}
    return (
        <div style={reviewItemStyle} className="review-item">
             <img src={img} alt="" />
            <h1 className="product-name">{name}</h1>
            <p>Quantity: {quantity} </p>
            <br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;