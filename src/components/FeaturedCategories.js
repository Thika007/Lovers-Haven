// src/components/FeaturedCategories.js
import React from 'react';

const FeaturedCategories = () => {
    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-xl font-bold mb-4">Featured Categories</h2>
            {/* Example of room types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Rooms & Suites</h3>
                    {/* Add Room components here */}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Offers & Deals</h3>
                    {/* Add Offers components here */}
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h3 className="font-bold">Amenities & Services</h3>
                    <ul>
                        <li>Wi-Fi</li>
                        <li>Pool</li>
                        <li>Spa</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCategories;