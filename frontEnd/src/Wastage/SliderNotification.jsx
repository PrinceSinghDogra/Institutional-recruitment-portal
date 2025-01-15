import React, { useState, useEffect } from 'react';
import './SliderNotification.css';

const SliderNotification = ({ message, show, onClose }) => {
    const [isVisible, setIsVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            setTimeout(() => {
                setIsVisible(false);
                onClose(); // Notify the parent to remove the notification
            }, 3000); // Notification disappears after 3 seconds
        }
    }, [show, onClose]);

    return (
        <div className={`slider-notification ${isVisible ? 'visible' : ''}`}>
            <span>{message}</span>
        </div>
    );
};

export default SliderNotification;
