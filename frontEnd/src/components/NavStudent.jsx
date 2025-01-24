import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NavStudent = () => {
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
        navigate('/student'); // Redirect to student homepage after login
    };

    return (
        <header className="navbar">
            <div className="navbar-logo">CU Campus Portal</div>
            <nav className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                {userType === 'Student' && (
                    <>
                        <Link to="/student/announcements" className="navbar-link">Announcements</Link>
                        <Link to="/student/JobListings" className="navbar-link">Job Listings</Link>
                        <Link to="/student/applications" className="navbar-link">Applications</Link>
                        <Link to="/student/profile" className="navbar-link">Profile</Link>
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

export default NavStudent;
