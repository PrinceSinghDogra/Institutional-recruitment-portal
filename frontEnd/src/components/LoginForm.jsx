import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const LoginForm = ({ onLogin }) => {
    const [uid, setUid] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("Student");
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = { uid, password, userType };

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(loginData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setNotification(errorData.message);
                return;
            }

            const data = await response.json();
            setNotification(data.message);

            const user = { userType, uid };
            localStorage.setItem("user", JSON.stringify(user));

            // Call onLogin to update userType in App.jsx
            onLogin(user);

            // Redirect based on userType
            if (userType === "Student") {
                navigate("/");
            } else {
                navigate("/");
            }
        } catch (error) {
            setNotification("An error occurred. Please try again.");
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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

                <button type="submit" className="form-submit-btn">
                    Login
                </button>
            </form>

            {notification && <div className="notification">{notification}</div>}

            <p>
                Don't have an account?{" "}
                <button onClick={() => navigate("/register")}>Register here</button>
            </p>
        </div>
    );
};

export default LoginForm;
