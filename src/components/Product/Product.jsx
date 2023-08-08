import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { AuthContext } from '../../Providers/AuthProviders';

const Product = (props) => {

    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;
    const{user} = useContext(AuthContext)

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
           {
            user ? 
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            : 
            <link to='login'></link>
           }
        </div>
    );
};

export default Product;