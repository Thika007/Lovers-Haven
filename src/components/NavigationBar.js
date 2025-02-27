import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      {/* Hamburger Icon for Mobile */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-white focus:outline-none"
      >
        <svg
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col items-start p-6 space-y-4">
          <li>
            <Link
              to="/"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Rooms & Suites
            </Link>
          </li>
          <li>
            <Link
              to="/offers"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Offers/Deals
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block px-4 py-2 text-lg hover:bg-gray-700 rounded"
              onClick={toggleMenu}
            >
              Login/Sign Up
            </Link>
          </li>
        </ul>
      </div>

      {/* Links for Desktop */}
      <div className="hidden md:flex space-x-4">
        <Link className="hover:text-gray-300" to="/">
          Home
        </Link>
        <Link className="hover:text-gray-300" to="/rooms">
          Rooms & Suites
        </Link>
        <Link className="hover:text-gray-300" to="/offers">
          Offers/Deals
        </Link>
        <Link className="hover:text-gray-300" to="/about">
          About Us
        </Link>
        <Link className="hover:text-gray-300" to="/contact">
          Contact Us
        </Link>
        <Link className="hover:text-gray-300" to="/login">
          Login/Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
