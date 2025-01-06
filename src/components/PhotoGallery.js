// src/components/PhotoGallery.js
import React from 'react';

const PhotoGallery = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Photo Gallery</h2>
            {/* Use images uploaded by you */}
            <img src="/images/1.png" alt="Hotel" className="w-full h-auto rounded shadow-lg" />
        </div>
    );
};

export default PhotoGallery;