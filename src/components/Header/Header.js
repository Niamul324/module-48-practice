import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <div className='navigation-component'>
                <a href="Order">Order</a>
                <a href="Order Review">Order Review</a>
                <a href="Manage Inventory">Manage Inventory</a>
                <a href="Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;