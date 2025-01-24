import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Applications_Admin.css";

const Applications_Admin = () => {
    const [applications, setApplications] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];
        setApplications(storedApplications);
    }, []);

    const filteredApplications = applications.filter((app) =>
        app.studentName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
            <div className="applications-admin">
                <h1>View Applications</h1>
                <input
                    type="text"
                    placeholder="Filter by student name"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="filter-input"
                />
                <table className="applications-table">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Job Title</th>
                            <th>Company Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredApplications.map((app, index) => (
                            <tr key={index}>
                                <td>{app.studentName}</td>
                                <td>{app.jobTitle}</td>
                                <td>{app.companyName}</td>
                                <td>{app.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default Applications_Admin;
