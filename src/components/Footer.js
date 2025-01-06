import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className="p-6 text-white bg-gray-800"> 
            <div className="mb-2 text-center">
                Lovers' Haven, Matara Rood, Akurassa, Sri Lanka | 
                <a href="tel:(076)-335-3506" className="text-red-500">(076)-335-3506</a> | 
                Reservations 
                <a href="tel:(076)-978-7556" className="text-red-500">(076)-978-7556</a>
            </div>
            <label className="block float-none w-auto text-center my-0 mb-5 italic text-[20px] leading-[1] font-serif">
                Stay Connected
            </label>
            
            {/* Social Media Icons with Hover Effects */}
            <div className="flex justify-center mb-5 space-x-6">
                <i className="fab fa-instagram text-[#BC4229] text-2xl transition-transform transform hover:scale-110 hover:text-yellow-500"></i>
                <i className="fab fa-facebook text-[#BC4229] text-2xl transition-transform transform hover:scale-110 hover:text-blue-600"></i>
                <i className="fab fa-twitter text-[#BC4229] text-2xl transition-transform transform hover:scale-110 hover:text-blue-400"></i>
                <i className="fab fa-vimeo text-[#BC4229] text-2xl transition-transform transform hover:scale-110 hover:text-green-500"></i>
                <i className="fab fa-youtube text-[#BC4229] text-2xl transition-transform transform hover:scale-110 hover:text-red-600"></i>
            </div>

            <p className="text-center">
                Contact: thibuddhi@gmail.com | Phone: 0763353506
            </p>
            <p className="mt-4 text-center credits">
                &copy; 2024 The Broadmoor All rights reserved
            </p>  
        </footer>
    );
};

export default Footer;
