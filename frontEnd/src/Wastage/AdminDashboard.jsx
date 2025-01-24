import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [adminName, setAdminName] = useState("");

    useEffect(() => {
        // Fetch logged-in user data from localStorage
        const user = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!user || user.userType !== "Admin") {
            // Redirect to login if no user is logged in or user type is not Admin
            navigate("/login");
        } else {
            setAdminName(user.firstName);
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
            <h1>Welcome, {adminName}!</h1>
            <p>This is your admin dashboard where you can manage student and recruiter activities.</p>
            <div className="dashboard-actions">
                <button className="action-btn">Approve Registrations</button>
                <button className="action-btn">Post Announcements</button>
                <button className="action-btn">View Reports</button>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default AdminDashboard;
