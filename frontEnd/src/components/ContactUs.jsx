import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <>
            <div className="contact-us-container">
                <div className="contact-us-header">
                    <h1>Contact Us</h1>
                    <p className="subheading">We’re Here to Assist You</p>
                </div>
                <div className="contact-us-content">
                    <div className="contact-info">
                        <p>
                            Have any questions? Our team is always ready to help! Whether it’s about the portal, the features, or just general inquiries, feel free to reach out.
                        </p>
                        <ul>
                            <li><strong>Email:</strong> info@cumail.in</li>
                            <li><strong>Phone:</strong> +91-160-5017000, +91-8067947100 (24*7 Helpline No.)</li>
                            <li><strong>Address:</strong> Chandigarh University <br />
                                NH-5 Chandigarh-Ludhiana Highway, <br />
                                Mohali, Punjab (INDIA)</li>
                        </ul>
                    </div>
                    <div className="contact-form">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="email" placeholder="Phone Number" />
                        <input type="text" placeholder="Your Message (Feedback)" />
                        <button className="send-btn">Send Message</button>
                    </div>
                </div>
                {/* Social Media Icons */}
                <div className="contact-icons">
                    <h3>Connect with us</h3>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <i className="fab fa-threads"></i>
                    </a>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
