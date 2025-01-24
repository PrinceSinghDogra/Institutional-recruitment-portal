import React from 'react';
import Footer from './Footer';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import './Profile.css';

const Profile = ({ user }) => {
    // Check if user data is provided, if not show a message
    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <>
        <div className="profile">
            <h1 className="profile-title">Your Profile</h1>
            <div className="profile-details">
                <h2 className="details-title">Personal Information</h2>
                <ul className="details-list">
                    <li><strong>Name:</strong> {user.name}</li>
                    <li><strong>UID:</strong> {user.uid}</li>
                    <li><strong>Email:</strong> {user.email}</li>
                    <li><strong>Phone:</strong> {user.phone}</li>
                    <li><strong>Department:</strong> {user.department}</li>
                </ul>
            </div>
            <div className="profile-actions">
                <button className="profile-button">Edit Profile</button>
                <button className="profile-button logout-button">Logout</button>
            </div>
        </div>
        <Footer/ >
        </>
    );
};

// Prop validation to ensure 'user' is passed correctly
Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        uid: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        department: PropTypes.string.isRequired,
        userType: PropTypes.string.isRequired,
    }).isRequired,
};

export default Profile;
