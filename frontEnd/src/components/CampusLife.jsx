import React, { useState } from "react";
import "./CampusLife.css";

import C1 from "./images/C1.jpeg";
import C4 from "./images/C4.jpg";
import C5 from "./images/C5.jpg";
import C6 from "./images/C6.jpg";
import C7 from "./images/C7.jpg";

const CampusLife = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [C1, C4, C5, C6, C7];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="CampusLife-container">
            <h2 className="headings">Our CampusLife</h2>
            <div className="image-slider">
                <button className="arrow-btn left" onClick={prevSlide}>
                    &#10094;
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Campus Life ${currentIndex + 1}`}
                    className="slider-image"
                />
                <button className="arrow-btn right" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default CampusLife;
