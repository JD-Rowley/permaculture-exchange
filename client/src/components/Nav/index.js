import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Nav() {
    return (
        <ul className='nav-bar'>
            <li>
                <Link to="/about" className='nav-link'>About</Link>
                <Link to="/trade" className='nav-link'>Trade</Link>
                <a href="https://www.gofundme.com/f/utahpermaculture" className='nav-link'>Donate</a>
                <Link to="/login" className='nav-link'>Login</Link>
                <a href="/" className='nav-link'>Logout</a>
            </li>
        </ul>
    );
}

export default Nav;