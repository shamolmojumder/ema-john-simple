import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import { Link } from 'react-router-dom';


const Product = (props) => {
    //console.log(props);
    const {handleAddProduct,product}=props;
    //  console.log(props.product.key);
    const { name, img, seller, price, stock,key,wholePrice } =product;
    return (
        <div className="product">

            <div>
                <img src={img} alt="" />
            </div>

            <div>
            {/* target="_blank"  */}
                <h4 className="product-name"> <Link to={"/product/"+key}>{name} </Link> </h4> 
                <br />
                <p> <small> by {seller}</small> </p>
                <p><small>Price: {price}</small></p>
                <p> <small>Whole Sale Price: ${wholePrice}</small> </p>
                <br />
                <p><small>only {stock} left in stock - order soon </small></p>
                {props.showAddToCart === true && <button className="main-button" onClick={() => {handleAddProduct(product) }}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};
export default Product;