// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        // eslint-disable-next-line react/prop-types
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        // eslint-disable-next-line react/prop-types
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel w-full rounded" style={{ height: '600px', position: 'relative' }}>
            {/* eslint-disable-next-line react/prop-types */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item relative w-full h-full ${index === currentSlide ? 'active' : ''}`}
                >
                    <img src={image} className="w-full h-full" alt={`Slide ${index + 1}`} />
                </div>
            ))}
            <button className="btn btn-circle absolute  ml-10 prev" onClick={prevSlide}>❮</button>
            <button className="btn btn-circle absolute next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carousel;
