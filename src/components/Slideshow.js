// src/components/Slideshow.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
    const images = [
        '/images/3.jpg',
        '/images/5.jpg',
        '/images/8.jpg',
    ];

    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="relative slideshow-container">
            <Slider {...settings} ref={setSliderRef}>
                {images.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                    </div>
                ))}
            </Slider>
            <button 
                aria-label="Previous slide" 
                className="absolute p-2 text-gray-800 transform -translate-y-1/2 bg-white rounded-full shadow-md left-4 top-1/2 hover:bg-gray-200"
                onClick={() => sliderRef.slickPrev()}
            >
                <FaChevronLeft className="text-lg" /> {/* Icon for Previous */}
            </button>
            <button 
                aria-label="Next slide" 
                className="absolute p-2 text-gray-800 transform -translate-y-1/2 bg-white rounded-full shadow-md right-4 top-1/2 hover:bg-gray-200"
                onClick={() => sliderRef.slickNext()}
            >
                <FaChevronRight className="text-lg" /> {/* Icon for Next */}
            </button>
        </div>
    );
};

export default Slideshow;