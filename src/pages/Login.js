// src/pages/Login.js
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = ({ onLogin }) => { // Accept onLogin as a prop
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        onLogin(); // Call the onLogin function passed as a prop
    };

    return (
        <div 
            className="flex items-center justify-center h-screen bg-gray-200" 
            style={{ backgroundImage: 'url(/images/2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
            <div className="p-8 text-white bg-transparent border-2 rounded-lg shadow-lg wrapper border-white/20 backdrop-blur-md">
                <h1 className="mb-6 text-3xl text-center">Login</h1>
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
                            type="password" 
                            placeholder="Password" 
                            required 
                            className="w-full h-12 pl-4 pr-10 text-white placeholder-white bg-transparent border-2 rounded-full border-white/20"
                        />
                        <FaLock className="absolute text-white transform -translate-y-1/2 right-4 top-1/2" />
                    </div>

                    <div className="flex justify-between mb-4 text-sm remember-forgot">
                        <label>
                            <input type="checkbox" className="mr-2 accent-white" /> Remember me
                        </label>
                        <a href="#" className="text-white hover:underline">Forgot password?</a>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full h-12 font-semibold text-gray-800 transition duration-200 bg-white rounded-full shadow-md hover:bg-gray-200"
                    >
                        Login
                    </button>

                    <div className="mt-4 text-sm text-center register-link">
                        <p>Don't have an account? <a href="#" className="font-semibold text-white hover:underline">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;