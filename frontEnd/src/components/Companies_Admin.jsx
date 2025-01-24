import React, { useState } from "react";
import Footer from "./Footer";
import "./Companies_Admin.css";

const Companies_Admin = () => {
    const [companyName, setCompanyName] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [eligibility, setEligibility] = useState("");

    const handleAddCompany = (e) => {
        e.preventDefault();
        const newCompany = { companyName, jobTitle, eligibility };

        // Save the company details to localStorage or send to the backend
        let companies = JSON.parse(localStorage.getItem("companies")) || [];
        companies.push(newCompany);
        localStorage.setItem("companies", JSON.stringify(companies));

        setCompanyName("");
        setJobTitle("");
        setEligibility("");
        alert("Company added successfully!");
    };

    return (
        <>
            <div className="companies-admin">
                <h1>Manage Companies</h1>
                <form onSubmit={handleAddCompany} className="company-form">
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            type="text"
                            id="jobTitle"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eligibility">Eligibility Criteria</label>
                        <textarea
                            id="eligibility"
                            value={eligibility}
                            onChange={(e) => setEligibility(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">
                        Add Company
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Companies_Admin;
