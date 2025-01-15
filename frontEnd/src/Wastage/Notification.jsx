import React, { useState, useEffect } from "react";
import "./Notification.css";

const Notification = ({ message, type }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (message) {
            setVisible(true);
            setTimeout(() => setVisible(false), 3000); // Hide after 3 seconds
        }
    }, [message]);

    if (!visible) return null;

    return (
        <div className={`notification ${type}`}>
            {message}
        </div>
    );
};

export default Notification;
