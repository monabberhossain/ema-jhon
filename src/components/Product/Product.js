import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';

const Product = ({product, addToCartHandler}) => {

    // const {product, addToCartHandler} = props;
    const {name, img, seller, price, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
                <h5>Brand: {seller}</h5>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={ () => addToCartHandler(product)} className='btn-cart'>
                <h4 className='btn-txt'>Add To Cart</h4>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;