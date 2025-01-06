// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-center my-4">
            <input type="text" placeholder="Search for rooms..." className="border border-gray-300 rounded p-2 w-1/2" />
            <button className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Search</button>
        </div>
    );
};

export default SearchBar;