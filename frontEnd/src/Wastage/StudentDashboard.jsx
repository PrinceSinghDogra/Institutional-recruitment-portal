import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [studentName, setStudentName] = useState("");

    useEffect(() => {
        // Fetch logged-in user data from localStorage
        const user = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!user || user.userType !== "Student") {
            // Redirect to login if no user is logged in or user type is not Student
            navigate("/login");
        } else {
            setStudentName(user.firstName);
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear session storage or global context
        localStorage.removeItem("loggedInUser");
        // Redirect to login
        navigate("/login");
    };

    return (
        <div className="dashboard-container">
            <h1>Welcome, {studentName}!</h1>
            <p>This is your student dashboard where you can view and manage your academic activities.</p>
            <div className="dashboard-actions">
                <button className="action-btn">View Assignments</button>
                <button className="action-btn">Check Results</button>
                <button className="action-btn">Apply for Internship</button>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default StudentDashboard;
