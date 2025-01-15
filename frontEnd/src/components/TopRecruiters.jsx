import React  from "react";
import "./TopRecruiters.css"; // Add a separate CSS file for styles

const TopRecruiters = () => {
    return (
        <div className="recruiters-container">
            <h2 className="headings">Our Top Recruiters</h2>
            <div className="recruiters-grid">
                <div className="recruiter-icon">
                    <i className="fab fa-amazon"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-google"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-windows"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-yahoo"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-aws"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-shopify"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-bitcoin"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-facebook"></i>
                </div>
                
                {/*
                <div className="recruiter-icon">
                    <i className="fa-brands fa-pinterest"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-skype"></i>
                </div>

                <div className="recruiter-icon">
                    <i className="fa-brands fa-scribd"></i>
                </div>
                <div className="recruiter-icon">
                    <i className="fa-brands fa-safari"></i>
                </div>
                */}
            </div>
        </div>
    );
};

export default TopRecruiters;
