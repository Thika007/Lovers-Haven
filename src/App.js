// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // Assuming you have a Home component created
import Rooms from './pages/Rooms';
import Offers from './pages/Offers';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import FeaturedCategories from './components/FeaturedCategories';
import Footer from './components/Footer';
import LocationMap from './components/LocationMap';
import PhotoGallery from './components/PhotoGallery';
import Slideshow from './components/Slideshow'; // Import the Slideshow component
import Register from './pages/Register'; // Import the Register component


const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<><Home /><Slideshow /></>} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> 
            </Routes>
            <FeaturedCategories />
            <PhotoGallery />
            <LocationMap />
            <Footer />
        </>
    );
};

export default App;