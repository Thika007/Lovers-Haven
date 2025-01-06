// src/components/LocationMap.js
import React from 'react';

const LocationMap = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Location Map</h2>
            {/* Google Maps Embed API */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509797!2d144.9537353153164!3d-37.81627997975184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11e5c5%3A0x5045675218ceed30!2sYour%20Location%20Name!5e0!3m2!1sen!2sau!4v1611234567890"
                width="100%"
                height="450"
                title="Location Map"
                className="rounded shadow-lg"
            ></iframe>
        </div>
    );
};

export default LocationMap;