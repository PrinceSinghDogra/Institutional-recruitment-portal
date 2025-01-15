import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavStudent from "./components/NavStudent";
import NavAdmin from "./components/NavAdmin";
import Navbar from "./components/Navbar";
import TopRecruiters from "./components/TopRecruiters";
import CampusLife from "./components/CampusLife";
import Alumni from "./components/Alumni";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
  const [userType, setUserType] = useState(null); // Track the logged-in user type

  useEffect(() => {
    // Check if a user is logged in from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserType(user.userType); // Set userType based on logged-in user
    }
  }, []);

  const handleLogin = (user) => {
    // Set userType directly when logging in
    setUserType(user.userType);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUserType(null); // Clear user type on logout
  };

  return (
    <Router>
      {/* Render either NavStudent or NavAdmin based on the logged-in user */}
      {userType === "Student" ? (
        <NavStudent onLogout={handleLogout} />
      ) : userType === "Admin" ? (
        <NavAdmin onLogout={handleLogout} />
      ) : (
        <Navbar />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="main_Img">
                <div className="logo-container">
                  <img
                    src="https://cdn.freelogovectors.net/wp-content/uploads/2022/03/chandigarh_university_logo_cu_freelogovectors.net_.png"
                    alt="Chandigarh University Logo"
                    className="main-logo"
                  />
                </div>
                <h1>
                  Welcome to the Chandigarh University <br />
                  Campus Portal 2025
                </h1>
                <div className="main_Cont">
                  Chandigarh University is a hub of innovation, academic excellence, and global opportunities. We foster research, industry collaborations, and a vibrant community, empowering students to grow personally and professionally while making a meaningful impact on society.
                </div>
              </main>
              <TopRecruiters />
              <CampusLife />
              <Alumni />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={<LoginForm onLogin={handleLogin} />} // Pass handleLogin to LoginForm
        />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
};

export default App;
