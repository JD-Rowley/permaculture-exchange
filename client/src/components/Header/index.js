import React from 'react';
import Nav from '../Nav';
import HeaderLogo from '../../assets/img/Alternate_Logo.png';
import './style.css';

function Header() {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src={HeaderLogo} alt="UPC Alternate Logo" />
            </div>
            <div className='nav-container'>
                <Nav />
            </div>
        </div>
    );
}

export default Header;