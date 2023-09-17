import React from 'react';

const Cart = ({cart}) => {
    return (
        <div className="cart-summary-container">
              <h4>Cart summary</h4>
                <p>Total Cart : {cart.length}</p>
        </div>
    );
};

export default Cart;