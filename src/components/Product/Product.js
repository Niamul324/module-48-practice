import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartShopping} from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {product, cartHandling} = props;
    // console.log(product);
    const{name, price, seller, ratings, img} = product;
    return (
        <div className='product-details'>
            <div className="img-depo">
                <img src={img} alt="" />
            </div>
            <div className="name-price-depo">
                <h4>Name :{name}</h4>
                <h5>Price :{price}</h5>
            </div>
            <div className="seller-ratings-depo">
                <p>Manufacturer :{seller}</p>
                <p>Ratings :{ratings}</p>
            </div>
            {/* <button className="btn">Add To Cart</button> */}
            <button className='btn' onClick={()=> cartHandling(product)}>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;