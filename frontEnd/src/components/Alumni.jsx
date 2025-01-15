import React, { useState } from "react";
import "./Alumni.css";

import A1 from "./images/A1.png";
import P2 from "./images/P2.png";
import M3 from "./images/M3.png";
import O4 from "./images/O4.png";
import N5 from "./images/N5.png";

const Alumni = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [A1, P2, M3, O4, N5];

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="Alumni-container">
            <h2 className="headings">Our Alumni</h2>
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

export default Alumni;
