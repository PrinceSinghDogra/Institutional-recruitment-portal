import React from 'react';
import './JobListings.css';
import Footer from './Footer';

const JobListings = () => {
    return (
        <>
            <div className="job-listings">
                <h1 className="job-listings-title">Job Listings</h1>
                <p className="job-listings-description">
                    Explore the latest job opportunities exclusively available to campus students. Find internships, full-time jobs, and more.
                </p>
                <ul className="job-listings-list">
                    <li>Software Developer - XYZ Corp</li>
                    <li>Data Analyst Intern - ABC Pvt Ltd</li>
                    <li>Marketing Associate - DEF Group</li>
                    <li>Graphic Designer - GHI Solutions</li>
                </ul>
            </div>
            <Footer />
        </>
    );
};

export default JobListings;
