import React from 'react';
import Footer from './Footer';
import './Applications.css';

const Applications = () => {
    return (
        <>
            <div className="applications">
                <h1 className="applications-title">Applications</h1>
                <p className="applications-description">
                    Submit and track your applications for various campus services, programs, and opportunities. Stay informed about the status of your requests.
                </p>
                <div className="applications-tracking">
                    <h2 className="tracking-title">Track Your Applications</h2>
                    <ul className="tracking-list">
                        <li>Library Membership - Approved</li>
                        <li>Hostel Room Change - Pending</li>
                        <li>Internship Application - Approved</li>
                        <li>Event Participation - Rejected</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Applications;
