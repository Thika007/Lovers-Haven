// src/components/NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="space-x-4">
            <Link className="hover:text-gray-300" to="/">Home</Link>
            <Link className="hover:text-gray-300" to="/rooms">Rooms & Suites</Link>
            <Link className="hover:text-gray-300" to="/offers">Offers/Deals</Link>
            <Link className="hover:text-gray-300" to="/about">About Us</Link>
            <Link className="hover:text-gray-300" to="/contact">Contact Us</Link>
            <Link className="hover:text-gray-300" to="/login">Login/Sign Up</Link>
        </nav>
    );
};

export default NavigationBar;