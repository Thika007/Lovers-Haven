import React from 'react';
import NavigationBar from './NavigationBar';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 text-white bg-gray-800">
            <img src="/images/Lovers.png" alt="Lovers' Haven" className="h-20" />
            <NavigationBar />
        </header>
    );
};

export default Header;
