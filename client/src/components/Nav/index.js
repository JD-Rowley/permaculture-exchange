import React from 'react';
import './style.css';

function Nav() {
    return (
        <ul className='nav-bar'>
            <li>
                <a href="#about">About</a>
                <a href="#trade">Trade</a>
                <a href="https://www.gofundme.com/f/utahpermaculture">Donate</a>
                <a href="#login">Login</a>
                <a href="#logout">Logout</a>
            </li>
        </ul>
    );
}

export default Nav;