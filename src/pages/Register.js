// src/pages/Register.js
import React from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Register = ({ onRegister }) => { // Accept onRegister as a prop
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        onRegister(); // Call the onRegister function passed as a prop
    };

    return (
        <div 
            className="flex items-center justify-center h-screen bg-gray-200" 
            style={{ backgroundImage: 'url(/images/10.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
            <div className="p-8 text-white bg-transparent border-2 rounded-lg shadow-lg wrapper border-white/20 backdrop-blur-md">
                <h1 className="mb-6 text-3xl text-center">Register</h1>
                <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                    <div className="relative mb-6 input-box">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            required 
                            className="w-full h-12 pl-4 pr-10 text-white placeholder-white bg-transparent border-2 rounded-full border-white/20"
                        />
                        <FaUser className="absolute text-white transform -translate-y-1/2 right-4 top-1/2" />
                    </div>
                    <div className="relative mb-6 input-box">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            required 
                            className="w-full h-12 pl-4 pr-10 text-white placeholder-white bg-transparent border-2 rounded-full border-white/20"
                        />
                        <FaEnvelope className="absolute text-white transform -translate-y-1/2 right-4 top-1/2" />
                    </div>
                    <div className="relative mb-6 input-box">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            required 
                            className="w-full h-12 pl-4 pr-10 text-white placeholder-white bg-transparent border-2 rounded-full border-white/20"
                        />
                        <FaLock className="absolute text-white transform -translate-y-1/2 right-4 top-1/2" />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full h-12 font-semibold text-gray-800 transition duration-200 bg-white rounded-full shadow-md hover:bg-gray-200"
                    >
                        Register
                    </button>

                    <div className="mt-4 text-sm text-center register-link">
                        <p>Already have an account? <Link to="/login" className="font-semibold text-white hover:underline">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
