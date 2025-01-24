import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <h2 className="footer-header">Quick Links</h2>
            <div className="footer-content">
                {/* Left Section */}
                <div className="footer-left">
                    <a href="https://www.cuchd.in/" className="footer-link">Official Website</a>
                    <a href="https://www.cuchd.in/contact/?utm_campaign=https://www.google.com/" className="footer-link">Quick Support</a>
                </div>
                {/* Right Section */}
                <div className="footer-right">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="footer-icon">
                        <i className="fab fa-threads"></i>
                    </a>
                </div>
            </div>
            <div className="footer-section">
                <h3 className="footer-header">Contact Us</h3>
                <address className="footer-address">
                    Chandigarh University<br />
                    NH-5 Chandigarh-Ludhiana Highway,<br />
                    Mohali, Punjab (INDIA)<br />
                    Phone: +91-160-5017000, +91-8067947100 (24*7 Helpline No.)<br />
                    Email: info@cumail.in <br />
                </address>
            </div>
            <div className="footer-signature">
                <p>Designed with ❤️ by <strong> Vaibhav Kumar </strong> </p>
            </div>
        </footer>
    );
};

export default Footer;
