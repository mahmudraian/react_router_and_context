import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='home'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='granpa'>Granpa</Link>
            <Link to='order'>Order</Link>
        </nav>
    );
};

export default Header;
<h1>This is header</h1>