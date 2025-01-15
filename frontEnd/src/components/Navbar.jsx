import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [userType, setUserType] = useState(null); // Track the logged-in user type
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch userType from localStorage after login
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserType(user.userType); // Set userType based on logged-in user
    }
  }, []);


  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserType(null); // Clear userType on logout
    navigate("/"); // Redirect to home page after logout
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">CU Campus Portal</div>
      <nav className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        {!userType && <Link to="/login" className="navbar-link">Login</Link>}
        {userType === "Student" && <Link to="/student-dashboard" className="navbar-link">Student Dashboard</Link>}
        {userType === "Admin" && <Link to="/admin-dashboard" className="navbar-link">Admin Dashboard</Link>}
        {userType && (
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

export default Navbar;
