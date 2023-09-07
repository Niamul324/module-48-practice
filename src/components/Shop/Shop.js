import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
// import '../../fakeData/products.json';
const Shop = () => {
    const [products , setProducts] = useState([]);
    const[cart, setCart] =useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setProducts(data))
    },[])

    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    /* total price */

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=>
                        <Product
                            product ={product}  
                            key = {product.id}
                            cartHandling ={addToCart}
                        ></Product>)
                    }
            </div>
            <div className="summary-container">
                <h4>Cart summary</h4>
                <p>Total Cart : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;