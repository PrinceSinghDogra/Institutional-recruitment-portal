import { useState } from 'react';
import './AboutUs.css';
import stamp_cu from "./images/stamp_cu.png";

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const image = [stamp_cu];

    return (
        <>
            <div className="about-us-container">
                <div className="about-us-header">
                    <h1>About Us</h1>
                    <h3>Placement Management System</h3>
                    <p className="subheading">Innovating for the Future of Students</p>
                    <p>
                        Our Placement Management System is designed to offer seamless support for students in their career journey, including features like Secure Authentication, Job Placement Support, and Opportunity Alerts.
                    </p>
                </div>

                <div className="about-us-content">
                    <div className="about-image">
                        <img
                            src={image[currentIndex]}
                            alt="About Us"
                            className="about-image-img"
                        />
                    </div>

                    <div className="feature-row">
                        <div className="feature-col">
                            <h3>Secure Authentication</h3>
                            <p>
                                We ensure your data and profiles are always secure through our robust authentication system.
                            </p>
                        </div>
                        <div className="feature-col">
                            <h3>Job Placement Support</h3>
                            <p>
                                Our platform helps connect students with job opportunities, ensuring a smooth transition from education to employment.
                            </p>
                        </div>
                        <div className="feature-col">
                            <h3>Opportunity Alert</h3>
                            <p>
                                Stay updated with the latest job alerts and campus recruitment drives, ensuring no opportunity is missed.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="about-developer">
                    <h3>About the Developer</h3>
                    <p>
                        This portal is developed by a passionate developer who aims to bridge the gap between students and industry opportunities. With a vision to create seamless experiences for students, the platform was built using modern technologies like React.js and Node.js.
                    </p>
                </div>

                <div className="about-college">
                    <h3>About Chandigarh University</h3>
                    <p>
                        Chandigarh University is a leading institution known for its commitment to academic excellence and its efforts to provide students with a holistic educational experience. With world-class infrastructure and a strong focus on career development, CU helps students excel in both academics and professional growth.
                    </p>
                </div>

                <div className="about-connect">
                    <h3>Connect with us</h3>
                    {/* Social Media Icons */}
                    <div className="contact-icons">
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

                <div className="cta">
                    <a href="https://www.cuchd.in/" className="footer-link cta-btn">
                        Join Us Now
                    </a>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
