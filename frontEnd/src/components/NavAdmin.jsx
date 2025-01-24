import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const NavAdmin = ({ onLogout }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogoutClick = () => {
        onLogout();
        navigate("/"); // Redirect to home page after logout
    };

    return (
        <header className="navbar">
            <div className="navbar-logo">CU Campus Portal</div>
            <nav className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/admin/announcements" className="navbar-link">Announcements</Link>
                {/* <Link to="/admin/manage-students" className="navbar-link">Students</Link> */}
                <Link to="/admin/manage-companies" className="navbar-link">Companies</Link>
                <Link to="/admin/applications" className="navbar-link">Applications</Link>
                <button onClick={handleLogoutClick} className="navbar-link logout-button">Logout</button>
                <div className="dropdown">
                    <button className="navbar-link dropdown-btn" onClick={toggleDropdown}>
                        Reach Out to Us
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <Link to="/about" className="dropdown-item">About Us</Link>
                            <Link to="/contact" className="dropdown-item">Contact Us</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavAdmin;


/*
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavAdmin = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [userType, setUserType] = useState(null); // Track the logged-in user type
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserType(user.userType); // Set userType based on logged-in user
        }
    }, []);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUserType(null);
        navigate('/'); // Redirect to home after logout
    };

    const handleLogin = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        setUserType(user.userType);
        navigate('/admin'); // Redirect to admin homepage after login
    };

    return (
        <header className="navbar">
            <div className="navbar-logo">CU Campus Portal</div>
            <nav className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                {userType === 'Admin' && (
                    <>
                        <Link to="/admin/Announcements-Admin" className="navbar-link">Announcement</Link>
                        <Link to="/admin/manage-students" className="navbar-link">Students</Link>
                        <Link to="/admin/manage-companies" className="navbar-link">Companies</Link>
                        <Link to="/admin/applications" className="navbar-link">Applications</Link>
                    </>
                )}
                {!userType ? (
                    <Link to="/login" className="navbar-link">Login</Link>
                ) : (
                    <button onClick={handleLogout} className="navbar-link">Logout</button>
                )}
                <div className="dropdown">
                    <button className="navbar-link dropdown-btn" onClick={toggleDropdown}>
                        Reach Out to Us
                    </button>
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <Link to="/about" className="dropdown-item">About Us</Link>
                            <Link to="/contact" className="dropdown-item">Contact Us</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default NavAdmin;
*/