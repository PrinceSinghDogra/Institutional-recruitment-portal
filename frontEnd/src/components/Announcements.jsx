import React from 'react';
import Footer from './Footer';
import './Announcements.css';

const Announcements = () => {
    return (
        <>
            <div className="announcements">
                <h1 className="announcements-title">Announcements</h1>
                <p className="announcements-description">
                    Stay updated with the latest news and announcements from the campus. Check here regularly to know what's happening.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default Announcements;
