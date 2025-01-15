import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const RegistrationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [uid, setUid] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [userType, setUserType] = useState("Student");
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const registerData = {
            firstName,
            lastName,
            uid,
            email,
            password,
            confirmPassword,
            userType,
        };

        try {
            const response = await fetch("http://localhost:3000/register", {  // Make sure this points to port 3000
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerData),
            });

            const data = await response.json();
            if (response.ok) {
                setNotification(data.message);
                navigate("/login");  // Redirect to login page after successful registration
            } else {
                setNotification(data.message);
            }
        } catch (error) {
            setNotification("An error occurred. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="uid">UID:</label>
                    <input
                        type="text"
                        id="uid"
                        name="uid"
                        value={uid}
                        onChange={(e) => setUid(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="userType">User Type:</label>
                    <select
                        id="userType"
                        name="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                    >
                        <option value="Student">Student</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="form-submit-btn">Register</button>
            </form>

            {notification && <div className="notification">{notification}</div>}

            <p>
                Already have an account? <button onClick={() => navigate("/login")}>Login here</button>
            </p>
        </div>
    );
};

export default RegistrationForm;
